import { useState } from 'react'
import Product from './components/Product.jsx'
import productsData from './dummyProducts.json'
import Navigation from './components/Navigation.jsx'


function App() {

  return (
    <>
    <Navigation />
    <main className='p-6 flex gap-2'>
    {productsData.products.map((product) => (
      <Product name={product.name} price={product.price} />
    ))}
    </main>
    </>
  )
}

export default App
