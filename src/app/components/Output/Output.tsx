"use client";

import { useFormContext } from "@/app/context/FormContext";
import { useMemo, useState, useEffect } from "react";

export default function Output() {
    const { values } = useFormContext();

    // Processa os valores e remove os vazios
    const { locale, date, options } = useMemo(() => {
        const filtered = Object.fromEntries(
            Object.entries(values).filter(([_, v]) => v !== "-" && v !== "")
        );

        const { locale = "pt-BR", date, ...options } = filtered;

        // Remove opções undefined
        const cleanOptions = Object.fromEntries(
            Object.entries(options).filter(([_, v]) => v !== undefined)
        );

        return { locale, date, options: cleanOptions };
    }, [values]);

    // Gera a string do código (apenas para exibição)
    const codeString = useMemo(() => {
        const datePart = date ? `"${date}"` : "";
        const optionsPart =
            Object.keys(options).length > 0
                ? `, ${JSON.stringify(options, null, 2)}`
                : "";
        return `new Date(${datePart}).toLocaleString("${locale}"${optionsPart})`;
    }, [locale, date, options]);

    // Estado para controlar se já montou no cliente
    const [mounted, setMounted] = useState(false);
    // Estado para data formatada só no cliente
    const [formattedDate, setFormattedDate] = useState("Carregando...");

    useEffect(() => {
        setMounted(true);
        try {
            const dateObj = date ? new Date(date) : new Date();
            setFormattedDate(dateObj.toLocaleString(locale, options));
        } catch (error) {
            console.error("Erro ao formatar data:", error);
            setFormattedDate("Formato inválido");
        }
    }, [locale, date, options]);

    // Durante SSR, evite renderizar a data formatada para evitar mismatch
    if (!mounted) {
        return (
            <div className="my-7">
                <h2 className="text-xl font-semibold mb-4">Componente Output</h2>
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className="my-7">
            <h2 className="text-xl font-semibold mb-4">Componente Output</h2>

            {/* Mostra os pares chave-valor atualizados */}
            {Object.entries(options).map(([key, value]) => (
                <div key={key} className="mb-1">
                    <strong className="capitalize">{key}:</strong> {value}
                </div>
            ))}

            {/* Resultado e código */}
            <div className="mt-6 p-4 rounded border border-gray-300 bg-white text-sm">
                <p>
                    <strong className="text-black">Result:</strong>{" "}
                    <span className="js-output text-black">{formattedDate}</span>
                </p>
                <p className="mt-2">
                    <strong className="text-black">Code:</strong>{" "}
                    <code className="bg-gray-100 px-2 py-1 text-[#e83e8c] whitespace-pre-wrap block">
                        {codeString}
                    </code>
                </p>
            </div>
        </div>
    );
}
