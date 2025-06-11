// FormContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type FormValues = {
    [key: string]: string;
};

type FormContextType = {
    values: FormValues;
    updateField: (name: string, value: string) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [values, setValues] = useState<FormValues>({});

    const updateField = (name: string, value: string) => {
        setValues(() => ({
            title: name,
            value_selected: value
        }));
    };

    return (
        <FormContext.Provider value={{ values, updateField }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context)
        throw new Error("useFormContext must be used inside FormProvider");
    return context;
};
