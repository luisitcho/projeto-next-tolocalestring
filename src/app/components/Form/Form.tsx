"use client";

import { useState, useEffect } from "react";
import { Select } from "./Select/Select";
import { Fieldset } from "../Fieldset/Fieldset";
import style from "./Form.module.scss";

export default function Form() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/dates");

                if (!response.ok) {
                    throw new Error("Erro ao buscar dados");
                }

                const result = await response.json();
                setData(result);
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

    console.log(data.data);

    return (
        <form className={`${style.form} form flex flex-col gap-6`}>
            <Fieldset>
                <Select data={data.data.locales} />
                <Select data={data.data.dateStyle} />
                <Select data={data.data.timeStyles} />
                <Select data={data.data.localeMatchers} />
            </Fieldset>

            <Fieldset>
                <Select data={data.data.hour12} />
                <Select data={data.data.hourCycle} />
                <Select data={data.data.formatMatcher} />
                <Select data={data.data.weekday} />
            </Fieldset>

            <Fieldset>
                <Select data={data.data.year} />
                <Select data={data.data.month} />
                <Select data={data.data.day} />
                <Select data={data.data.hour} />
            </Fieldset>

            <Fieldset>
                <Select data={data.data.minute} />
                <Select data={data.data.second} />
                <Select data={data.data.timeZoneName} />
                <Select data={data.data.timeZones} />
            </Fieldset>
        </form>
    );
}
