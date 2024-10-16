import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../dummyProducts.json';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Accordion from '../components/Accordion';

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams();
  const product = productsData.products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <main className='min-h-screen flex flex-row items-center justify-center'>
      <div className='bg-slate-400 w-full h-screen'></div>
      <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col gap-8 size-full max-w-[440px]'>
        <div>
        <p className='text-lg font-bold'>{product.name}</p>
        <p>{product.price}</p>
        </div>
      <button onClick={() => addToCart(product)} className='px-4 py-2 bg-stone-900 text-stone-50 w-full'>Add To Cart</button>
      <div>
      <Accordion title='Description' description='description' />
      <Accordion title='Material' description='description' />
      </div>
      </div>
      </div>
    </main>
  );
};

export default ProductDetail;