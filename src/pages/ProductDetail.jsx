import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../dummyProducts.json';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsData.products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700">Price: ${product.price}</p>
      <p className="text-gray-500">Category: {product.type}</p>
      <p className="text-gray-500">Gender: {product.gender}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;