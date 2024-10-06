import { Link } from "react-router-dom";
import { useState } from "react";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export default function Navigation() {
    
    const [visible, setVisible] = useState(false);

	return (
		<nav className="w-full h-14 fixed px-4 top-0 flex flex-row items-center justify-between">
			<div className="flex flex-row items-center">
			<a href="/" className="text-lg font-bold">+ Router Side +</a>
			<ul className="hidden sm:flex gap-4 px-4 justify-center text-stone-600">
				<li>
					<Link to="/" className="hover:text-stone-900" >Home</Link>
				</li>
				<li>
					<Link to="/collection" className="hover:text-stone-900">Collection</Link>
				</li>
			</ul>
			</div>
			<div className="flex flex-row items-center gap-4">
                <PiShoppingCartSimpleThin className="size-8 cursor-pointer" />
                <CiMenuFries onClick={() => setVisible(true)} className="w-7 h-7 cursor-pointer sm:hidden" />
			</div>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed top-0 left-0 bottom-0 overflow-hidden transition-all bg-slate-50 ${visible ? 'w-full' : 'w-0'}`}>
            <TfiClose onClick={() => setVisible(false)} className="absolute top-4 right-4" />
            </div>

		</nav>
	);
}
