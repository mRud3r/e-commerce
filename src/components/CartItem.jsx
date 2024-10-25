import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { GoTrash } from "react-icons/go";

export default function CartItem({ item }) {
	const { removeItem, updateQuantity } = useContext(CartContext);

	return (
		<div className="flex flex-row border-stone-500 p-2 w-full">
			<div className="size-24">
				<img src={item.image} alt="" className="w-full h-full object-cover" />
			</div>

			<div className="flex flex-col w-full ms-2 justify-between">
				<div className="w-full flex flex-row justify-between">
					<p>{item.name}</p>
                    <GoTrash onClick={() => removeItem(item.id)} className="size-6"/>
				</div>
				<div className="w-full flex flex-row justify-between">
					<div className="flex items-center bg-stone-200 gap-2 px-2">
						<button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
							-
						</button>
						<p className="mx-2">{item.quantity}</p>
						<button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
							+
						</button>
					</div>
					<p>{item.price}</p>
				</div>
			</div>
		</div>
	);
}
