"use client";
import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useCallback,
} from "react";

type FormValues = {
    [key: string]: string;
};

type FormContextType = {
    values: FormValues;
    updateField: (name: string, value: string) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

type FormProviderProps = {
    children: ReactNode;
    initialValues?: FormValues;
};

export const FormProvider = ({
    children,
    initialValues = {},
}: FormProviderProps) => {
    const [values, setValues] = useState<FormValues>(initialValues);

    const updateField = useCallback((name: string, value: string) => {
        setValues((prev) => {
            if (prev[name] === value) return prev;
            return { ...prev, [name]: value };
        });
    }, []);

    return (
        <FormContext.Provider value={{ values, updateField }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used inside FormProvider");
    }
    return context;
};
