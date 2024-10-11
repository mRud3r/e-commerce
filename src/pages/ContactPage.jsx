import ContactForm from "../components/ContactForm";

export default function ContactPage() {
    return (
            <main className="container mx-auto p-4 min-h-screen flex flex-row justify-center items-center gap-4">
            <div className="w-full">
                <h1 className="text-2xl">Contact Us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam officiis hic nihil corporis ut deserunt aut impedit suscipit tempora, alias, aliquam iste quas sit rem eveniet, minus sint! Laudantium, eaque!</p>

            </div>
            <ContactForm />
        </main>
    );
}