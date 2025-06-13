"use client";

import { useEffect } from 'react';
import Input from "./components/Input/Input";
import Output from "./components/Output/Output";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import { FormProvider, useFormContext } from "./context/FormContext";

// Valores iniciais estáticos (sem datas dinâmicas)
const staticInitialValues = {
    locale: 'pt-BR',
    timeZone: 'America/Sao_Paulo',
    // Outros valores padrão
};

function PageContent() {
    const { values, updateField } = useFormContext();

    console.log(values)
    // Atualiza valores dinâmicos apenas no cliente
    useEffect(() => {
        updateField('date', new Date().toISOString());
    }, [updateField]);

    const handleSelectChange = (field: string, value: string) => {
        updateField(field, value);
    };

    return (
        <>
            <Input />
            <Output />
            <Form onSelectChange={handleSelectChange} />
        </>
    );
}

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="content py-5">
                    <FormProvider initialValues={staticInitialValues}>
                        <PageContent />
                    </FormProvider>
                </div>
            </div>
            <Footer />
        </>
    );
}