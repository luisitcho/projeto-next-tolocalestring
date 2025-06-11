"use client";

import { useState, useEffect } from "react";
import { Select } from "./Select/Select";
import { Fieldset } from "../Fieldset/Fieldset";
import style from "./Form.module.scss";
import { title } from "process";

type SelectOption = {
    value: string;
    label: string;
};

type SelectField = {
    title: string;
    values: SelectOption[];
};

type DataType = {
    [key: string]: SelectField;
};

export default function Form() {
    const [data, setData] = useState<DataType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/dates");
                if (!response.ok) throw new Error("Erro ao buscar dados");

                const result = await response.json();
                setData(result.data); // já salva só `data`
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : "Erro desconhecido"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;
    if (!data) return <div>Sem dados</div>;

    const keys = Object.keys(data);

    // Divide os selects em blocos de 4
    const fieldsets = keys.reduce<SelectField[][]>((acc, key, index) => {
        const groupIndex = Math.floor(index / 4);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(data[key]);
        return acc;
    }, []);

    function handleSelect(title, value) {
        console.log(`titulo: ${title} | valor: ${value}`);
    }

    console.log(data);

    return (
        <form className={`${style.form} form flex flex-col gap-6`}>
            {fieldsets.map((group, i) => (
                <Fieldset key={i}>
                    {group.map((field, j) =>
                        field && field.values ? (
                            <Select
                                key={j}
                                data={field}
                                onChange={(value) => handleSelect(field.title, value)}
                            />
                        ) : null
                    )}
                </Fieldset>
            ))}
        </form>
    );
}
