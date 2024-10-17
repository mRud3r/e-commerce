import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({item}) {

    const {removeItem} = useContext(CartContext);

    return (
        <div className="flex flex-row border-stone-500 p-2 w-full">
            <div className="bg-stone-500 w-20 h-24"></div>
            <div className="flex flex-col w-full ms-2 justify-between">
                <div className="w-full flex flex-row justify-between">
                <p>{item.name}</p>
                <button onClick={() => removeItem(item.id)}>remove</button>
                </div>
                <div className="w-full flex flex-row justify-between">
                <p>{item.quantity}</p>
                <p>{item.price}</p>
                </div>
            </div>
        </div>
    );
}