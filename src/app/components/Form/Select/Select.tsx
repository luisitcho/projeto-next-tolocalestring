import { useFormContext } from "../../../context/FormContext";

type SelectProps = {
    data: {
        title: string;
        values: { value: string; label: string }[];
    };
    onChange?: (value: string) => void; // opcional, se quiser notificar manualmente
};

export function Select({ data, onChange }: SelectProps) {
    const { values, updateField } = useFormContext();
    const { title, values: options } = data;

    const selectedValue = values[title.toLowerCase()] || options[0]?.value || "";

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        updateField(title.toLowerCase(), newValue);
        if (onChange) onChange(newValue);
    };

    return (
        <label htmlFor={title.toLowerCase()}>
            <span className="block mb-1 font-medium">{title}</span>

            <select
                id={title.toLowerCase()}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition"
                value={selectedValue}
                onChange={handleChange}
            >
                {options.map((item, index) => (
                    <option key={index} value={item.value} className="bg-[#0a0a0a]">
                        {item.label}
                    </option>
                ))}
            </select>
        </label>
    );
}
