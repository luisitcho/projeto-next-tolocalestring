"use client";

import { useFormContext } from "../../context/FormContext";

export default function Input() {
    const { values } = useFormContext();

    return (
        <div className="my-7">
            <h2>Componente Input</h2>
            {Object.entries(values).map(([key, value]) => (
                <div key={key}>
                    <strong>{key}:</strong> {value}
                </div>
            ))}
        </div>
    );
}