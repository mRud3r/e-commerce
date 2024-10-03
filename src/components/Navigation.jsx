import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="w-full fixed top-0 text-stone-900 flex flex-row items-center justify-between px-4">
            <h1 className="text-2xl font-thin">+ The Router Side +</h1>
            <ul className="flex gap-4 p-3 justify-center">
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/collection' >Collection</Link></li>
            </ul>
        </nav>
    );
}