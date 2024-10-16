import { useContext } from 'react';
import Product from './Product.jsx';
import { ProductFilterContext } from '../context/ProductFilterContext.jsx';

export default function ProductList() {

    const {filteredProducts} = useContext(ProductFilterContext);

    return (
        <main className='flex flex-row'>
             <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
        </div>
        </main>
    );
}