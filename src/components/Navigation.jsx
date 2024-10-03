import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="w-full fixed top-0 text-stone-900">
            <ul className="flex gap-4 p-3 justify-center">
                <Link to='/' >Home</Link>
                <Link to='/collection' >Products</Link>
                <li>Category</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}