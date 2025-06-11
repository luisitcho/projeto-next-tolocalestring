import { useState } from "react";

type SelectProps = {
    data: {
        title: string;
        values: { value: string; label: string }[];
    };
    onChange?: (value: string) => void; // callback para avisar o pai
};

export function Select({ data, onChange }: SelectProps) {
    const [selectedValue, setSelectedValue] = useState<string>(
        data.values[0]?.value || ""
    );
    const { title, values } = data;

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setSelectedValue(value);
        if (onChange) onChange(value);
    }

    return (
        <label htmlFor={title.toLowerCase()}>
            <span className="block mb-1 font-medium">{title}</span>

            <select
                id={title.toLowerCase()}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition"
                value={selectedValue}
                onChange={handleChange}
            >
                {values.map((item, index) => (
                    <option
                        key={index}
                        value={item.value}
                        className="bg-[#0a0a0a]"
                    >
                        {item.label}
                    </option>
                ))}
            </select>
        </label>
    );
}
