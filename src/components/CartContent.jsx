import { useContext } from "react";
import { TfiClose } from "react-icons/tfi";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function CartContent({ cartVisible, setCartVisible }) {
	const { cartItems, totalItems } = useContext(CartContext);

	

	return (
		<>
		<div
			className={`fixed z-50 top-0 right-0 bottom-0 overflow-hidden transition-all bg-stone-50 ${
				cartVisible ? "w-full sm:w-96" : "w-0"
			}`}>
			<TfiClose
				onClick={() => setCartVisible(false)}
				className="absolute top-4 right-4"
			/>
			<h1 className="text-3xl mt-8 ms-8">Cart({totalItems})</h1>
			<div className="w-full p-4">
				{totalItems === 0 ? (
					<div className="py-8 flex items-center justify-center">
						<p className="text-sm">Your Cart is Empty</p>
					</div>
				) : (
					<>
						{cartItems.map((item) => (
							<CartItem key={item.id} item={item} />
						))}
						<Link
							to="/e-commerce/checkout"
							onClick={() => setCartVisible(false)}
							className="bg-stone-700 hover:bg-stone-800 text-stone-50 py-4 px-8 mt-4 block text-center">
							Go to checkout
						</Link>
					</>
				)}
			</div>
		</div>
		{cartVisible && <div className="fixed w-screen h-screen top-0 left-0 bg-black/50" onClick={() => setCartVisible(false)}></div>}
		</>
	);
}
