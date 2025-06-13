"use client";
import { useFormContext } from "@/app/context/FormContext";
import { useEffect, useState } from "react";

export default function Output() {
    const { values } = useFormContext();
    const [formatted, setFormatted] = useState({
        result: "Carregando...",
        code: "new Date().toLocaleString()",
    });

    useEffect(() => {
        try {
            const locale = values.locales || "pt-BR";
            const date = values.date ? new Date(values.date) : new Date();

            // Processa opções mantendo a funcionalidade REAL
            const validOptions: Record<string, unknown> = {};
            Object.entries(values).forEach(([key, val]) => {
                if (!val || ["locales", "date", "-", ""].includes(key)) return;
                validOptions[key] = val;
            });

            // Gera o código REAL (com possíveis repetições)
            const originalCode = `new Date(${
                values.date ? `"${values.date}"` : ""
            }).toLocaleString("${locale}"${
                Object.keys(validOptions).length > 0
                    ? `, ${JSON.stringify(validOptions, null, 4)}`
                    : ""
            })`;

            // REMOVE REPETIÇÕES APENAS NA VISUALIZAÇÃO (replace inteligente)
            const displayCode = originalCode
                .replace(/"(\w+)":/g, (match, p1) => {
                    const lowerKey = p1.toLowerCase();
                    return lowerKey === p1.toLowerCase() ? `"${p1}":` : match;
                })
                .replace(/(,\s*"[^"]+":\s*"[^"]+")+/gi, (match) => {
                    const seen = new Set();
                    return match
                        .split(",")
                        .filter((part) => {
                            const keyMatch = part.match(/"([^"]+)":/);
                            if (!keyMatch) return true;
                            const key = keyMatch[1].toLowerCase();
                            return seen.has(key) ? false : seen.add(key);
                        })
                        .join(",");
                });

            setFormatted({
                result: date.toLocaleString(locale, validOptions),
                code: displayCode, // Exibe o código SEM repetições
            });
        } catch (error) {
            console.log(error)
            setFormatted({
                result: "Formato inválido",
                code: "// Erro: Verifique os valores",
            });
        }
    }, [values]);

    return (
        <div className="my-7">
            <div className="p-4 border rounded bg-white">
                <p className="mb-2">
                    <strong className="text-black">Result: </strong>
                    <span className="text-black">{formatted.result}</span>
                </p>
                <p className="mt-2 flex flex-col sm:flex-row gap-1 sm:items-center">
                    <strong className="text-black min-w-[60px]">Code:</strong>
                    <code className="bg-gray-100 px-2 py-1 text-[#e83e8c] whitespace-pre-wrap break-all">
                        {formatted.code}
                    </code>
                </p>
            </div>
        </div>
    );
}
