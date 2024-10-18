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

	const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

	const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }

	const calculateTotalPrice = () => {
		return cartItems
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	const { cartItems } = useContext(CartContext);
	return (
		<main className="min-h-screen flex flex-row w-full mt-32">
			<div className="w-full p-4">
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="">Email</label>
						<input type="email" name="email" onChange={handleChange} className="bg-stone-200 w-full p-4" />
					</div>
					<div>
						<label htmlFor="">Full Name</label>
						<input type="text" name="fullName" onChange={handleChange} className="bg-stone-200 w-full p-4" />
					</div>
					<div>
						<label htmlFor="">Adress</label>
						<input type="text" name="address" onChange={handleChange} className="bg-stone-200 w-full p-4" />
					</div>
					<div>
						<label htmlFor="">City</label>
						<input type="text" name="city" onChange={handleChange} className="bg-stone-200 w-full p-4" />
					</div>
					<div>
						<label htmlFor="">Postal Code</label>
						<input type="text" name="postalCode" onChange={handleChange} className="bg-stone-200 w-full p-4" />
					</div>
                    <div>
						<label htmlFor="">Country</label>
						<input type="text" name="country" onChange={handleChange} className="bg-stone-200 w-full p-4" />
					</div>
					<button type="submit" className="bg-stone-700 hover:bg-stone-800 text-stone-50 py-4 w-full">Order</button>
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
