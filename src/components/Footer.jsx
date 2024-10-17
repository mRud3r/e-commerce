import { Link } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
    return (
        <footer className="p-6 bg-stone-100 flex flex-row">
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

            <div className="w-full">
                <NewsletterForm />
            </div>
        </footer>
    );
}