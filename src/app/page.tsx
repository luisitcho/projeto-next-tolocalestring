"use client";

import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import { FormProvider, useFormContext } from "./context/FormContext";

function PageContent() {
    const { values } = useFormContext();

    function handleSelectChange(field: string, value: string) {
        console.log(`Field "${field}" changed to "${value}"`);
    }

    console.log(`values`, values); // agora funciona aqui

    return <Form onSelectChange={handleSelectChange} />;
}

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="content py-5">
                    <FormProvider>
                        <PageContent />
                    </FormProvider>
                </div>
            </div>
            <Footer />
        </>
    );
}
