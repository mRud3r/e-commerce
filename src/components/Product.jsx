import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Product({ product }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="size-full">
            <div className="w-full h-96 bg-stone-400"></div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}