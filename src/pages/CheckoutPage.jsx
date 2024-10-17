import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function CheckoutPage() {
	const [formData, setFormData] = useState({
		fullName: "",
		address: "",
		city: "",
		postalCode: "",
		country: "",
		email: "",
	});

	const calculateTotalPrice = () => {
		return cartItems
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	const { cartItems } = useContext(CartContext);
	return (
		<main className="min-h-screen flex flex-row w-full mt-32">
			<div className="w-full p-4">
				<form action="" className="space-y-4">
					<div>
						<label htmlFor="">Email</label>
						<input type="email" className="w-full border rounded p-2" />
					</div>
					<div>
						<label htmlFor="">Full Name</label>
						<input type="text" className="w-full border rounded p-2" />
					</div>
					<div>
						<label htmlFor="">Adress</label>
						<input type="text" className="w-full border rounded p-2" />
					</div>
					<div>
						<label htmlFor="">City</label>
						<input type="text" className="w-full border rounded p-2" />
					</div>
					<div>
						<label htmlFor="">Postal Code</label>
						<input type="text" className="w-full border rounded p-2" />
					</div>
                    <div>
						<label htmlFor="">Country</label>
						<input type="text" className="w-full border rounded p-2" />
					</div>
				</form>
			</div>
			<div className="w-full p-4">
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
				<h3>Total: {calculateTotalPrice()}</h3>
			</div>
		</main>
	);
}
