import Product from '../components/Product.jsx'
import ProductList from '../components/ProductList.jsx';
import productsData from '../dummyProducts.json'

export default function Collection() {
    return (
        <>
      <main className='px-4 py-6 max-w-screen-lg min-h-screen mx-auto m-12 text-stone-900'>
        <ProductList />
      </main>
      </>
    );
}