import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({item}) {

    const {removeItem} = useContext(CartContext);

    return (
        <div className="flex flex-row border-stone-500 p-2">
            <div className="bg-stone-500 size-10"></div>
            <div className="flex flex-col">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <button onClick={() => removeItem(item.id)}>remove</button>
            </div>
        </div>
    );
}