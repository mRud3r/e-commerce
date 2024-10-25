import ContactForm from "../components/ContactForm";

export default function ContactPage() {
    return (
            <main className="container mx-auto p-4 min-h-screen flex flex-col md:flex-row mt-20 md:mt-0 md:justify-center items-center gap-8">
            <div className="w-full flex flex-col gap-4">
                <h1 className="text-2xl">Contact Us</h1>
                <p className="font-light text-sm">Simply fill out the contact form below with your details and message, and our dedicated support team will get back to you as soon as possible. We strive to respond within 24 hours on business days, so you can expect a prompt reply!</p>
                <div className="font-thin">
                <p>Warsaw 02-785</p>
                <p>Konski Jar 10</p>
                <p>hello@routerside.com</p>
                <p>(48) 345 678 912</p>
            </div>

            </div>
            <ContactForm />
        </main>
    );
}