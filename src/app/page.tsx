'use client';

import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

export default function Home() {
    function handleSelectChange(field: string, value: string) {
        console.log(`Field "${field}" changed to "${value}"`);
    }

    return (
        <>
            <div className="container">
                <div className="content py-5">
                    <Form onSelectChange={handleSelectChange}/>
                </div>
            </div>
            <Footer />
        </>
    );
}
