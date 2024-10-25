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
    <main className='min-h-screen flex flex-col md:flex-row items-center gap-8 md:justify-center py-16 md:py-40 px-2'>

      <div className='w-full max-w-96 flex items-center justify-center'>
        <img src={product.image} alt="" />
      </div>


      <div className='flex items-center justify-center'>
      <div className='flex flex-col gap-8 size-full max-w-[440px]'>
        <div>
        <p className='text-lg font-bold'>{product.name}</p>
        <p>{product.price}</p>
        </div>
      <button onClick={() => addToCart(product)} className='px-4 py-2 bg-stone-900 text-stone-50 w-full'>Add To Cart</button>
      <div>
      <Accordion title='Description' description={product.description} />
      <Accordion title='Material' description={product.material} />
      </div>
      </div>
      </div>
    </main>
  ); 
};
  
export default ProductDetail;  