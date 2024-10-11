import { useContext } from "react";
import { TfiClose } from "react-icons/tfi";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

export default function CartContent( {cartVisible, setCartVisible} ) {
const {cartItems} = useContext(CartContext);

const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className={`fixed top-0 right-0 bottom-0 overflow-hidden transition-all bg-stone-50 ${cartVisible ? 'w-96' : 'w-0'}`}>
            <TfiClose onClick={() => setCartVisible(false)} className="absolute top-4 right-4" />
            <h1 className="text-3xl mt-8 ml-8">Cart({totalItems})</h1>
            
            {totalItems === 0 ? (
                    <div className="py-8 flex items-center justify-center">
                        <p className="text-sm">Your Cart is Empty</p>
                    </div>
            
        ) : (
            cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))
        )}

        </div>
    );
}