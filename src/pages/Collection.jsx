import Product from '../components/Product.jsx'
import productsData from '../dummyProducts.json'
import Navigation from '../components/Navigation.jsx'

export default function Collection() {
    return (
        <>
      <main className='px-4 py-6 max-w-screen-lg min-h-screen mx-auto m-12 text-stone-900'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {productsData.products.map((product) => (
        <Product name={product.name} price={product.price} />
      ))}
        </div>
      </main>
      </>
    );
}