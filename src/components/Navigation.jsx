import CartContent from "./CartContent";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navigation() {

	const { totalItems } = useContext(CartContext);
    
    const [menuVisible, setMenuVisible] = useState(false);
	const [cartVisible, setCartVisible] = useState(false);

	return (
		<nav className="bg-stone-100 w-full h-14 fixed z-40 px-4 top-0 flex flex-row items-center justify-center">
			<div className="container flex flex-row items-center justify-between">
			<div className="flex flex-row items-center">
			<a href="/" className="text-lg font-bold">+ Router Side +</a>
			<ul className="hidden sm:flex gap-4 px-4 justify-center text-stone-600">
				<li>
					<NavLink to="/e-commerce/"
					end
					className={({ isActive }) => 
						isActive 
							? "text-stone-950 font-semibold" 
							: "text-stone-500 hover:text-stone-950" }
							>Home</NavLink>
				</li>
				<li>
					<NavLink to="/e-commerce/collection" className={({ isActive }) => 
						isActive 
							? "text-stone-950 font-semibold" 
							: "text-stone-500 hover:text-stone-950" }>Collection</NavLink>
				</li>
				<li>
					<NavLink to="/e-commerce/contact" className={({ isActive }) => 
						isActive 
							? "text-stone-950 font-semibold" 
							: "text-stone-500 hover:text-stone-950" }>Contact</NavLink>
				</li>
			</ul>
			</div>
			<div className="flex flex-row items-center gap-4">
				<div className="flex items-center">
					<PiShoppingCartSimpleThin onClick={() => setCartVisible(true)} className="size-8 cursor-pointer" />
					{totalItems !== 0 && <span className="font-thin text-lg">{`(${totalItems})`}</span>}
					</div>
                <CiMenuFries onClick={() => setMenuVisible(true)} className="w-7 h-7 cursor-pointer sm:hidden" />
			</div>


            <div className={`fixed top-0 left-0 bottom-0 flex flex-col overflow-hidden transition-all bg-stone-50 ${menuVisible ? 'w-full' : 'w-0'}`}>
            <TfiClose onClick={() => setMenuVisible(false)} className="absolute top-4 right-4" />
			<a href="/" className="text-lg font-bold p-3">+ Router Side +</a>
			<ul className=" flex flex-col gap-4 px-4 mt-8 text-4xl">
				<li>
					<NavLink to="/e-commerce/"
					onClick={() => setMenuVisible(flase)}
					className={({ isActive }) => 
						isActive 
							? "text-stone-950 font-semibold" 
							: "text-stone-500 hover:text-stone-950" }
							>Home</NavLink>
				</li>
				<li>
					<NavLink to="/e-commerce/collection"
					onClick={() => setMenuVisible(flase)}
					className={({ isActive }) => 
						isActive 
							? "text-stone-950 font-semibold" 
							: "text-stone-500 hover:text-stone-950" }>Collection</NavLink>
				</li>
				<li>
					<NavLink to="/e-commerce/contact"
					onClick={() => setMenuVisible(flase)}
					 className={({ isActive }) => 
						isActive 
							? "text-stone-950 font-semibold" 
							: "text-stone-500 hover:text-stone-950" }>Contact</NavLink>
				</li>
			</ul>
            </div>

			<CartContent cartVisible={cartVisible} setCartVisible={setCartVisible} />
			</div>

		</nav>
	);
}
