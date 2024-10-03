import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="p-6 bg-stone-200">
            <nav>
            <ul className="flex gap-4 p-3 justify-center">
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/collection' >Collection</Link></li>
            </ul>
        </nav>
        </footer>
    );
}