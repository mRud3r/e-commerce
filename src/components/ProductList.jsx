import productsData from '../dummyProducts.json'
import Product from './Product.jsx';

export default function ProductList() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {productsData.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
        </div>
    );
}