import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="content py-5">
                    <Form />
                </div>
            </div>
            <Footer />
        </>
    );
}
