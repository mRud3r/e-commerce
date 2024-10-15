import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../dummyProducts.json';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const product = productsData.products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)} >Add To Cart</button>
      </div>
    </main>
  );
};

export default ProductDetail;