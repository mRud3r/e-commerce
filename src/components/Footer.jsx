import { Link } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
    return (
        <footer className="py-20 px-4 bg-stone-100 flex items-center justify-center">
            <div className="container flex flex-col gap-4 md:flex-row">
            <div className="w-full flex flex-col items-start gap-4">
            <a href="/" className="text-lg font-bold">+ Router Side +</a>
            <nav>
            <ul className="flex gap-4">
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/collection' >Collection</Link></li>
                <li><Link to='/contact' >Contact</Link></li>
            </ul>
        </nav>
            <div className="font-thin">
                <p>Warsaw 02-785</p>
                <p>Konski Jar 10</p>
                <p>hello@routerside.com</p>
                <p>(48) 345 678 912</p>
            </div>
            </div>

            <div className="w-full md:flex items-center justify-center">
                <NewsletterForm />
            </div>
            </div>
        </footer>
    );
}