import { Link } from "react-router-dom";
import { useState } from "react";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export default function Navigation() {
    
    const [visible, setVisible] = useState(false);

	return (
		<nav className="w-full fixed top-0 text-stone-900 flex flex-row items-center justify-between px-8">
			<h1 className="text-2xl font-thin">+ The Router Side +</h1>
			<ul className="hidden sm:flex gap-4 p-3 justify-center">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/collection">Collection</Link>
				</li>
			</ul>
			<div className="flex flex-row items-center gap-4">
				<div>
                <PiShoppingCartSimpleThin className="w-7 h-7 cursor-pointer" />
					<p className="absolute bottom-[-2px]">10</p>
				</div>
                <CiMenuFries onClick={() => setVisible(true)} className="w-7 h-7 cursor-pointer sm:hidden" />
			</div>

            {/* Mobile Sidebar Menu */}
            <div className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-slate-50 ${visible ? 'w-full' : 'w-0'}`}>
            <TfiClose onClick={() => setVisible(false)} />
            </div>

		</nav>
	);
}
