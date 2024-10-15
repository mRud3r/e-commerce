import { Link } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import ProductsData from '../dummyProducts.json';

export default function HomePage() {
	return (
		<>
			<main className="w-full flex flex-col items-center min-h-screen px-2">
        <div className="p-6 flex flex-col items-center justify-center w-6/12 gap-6 my-28 text-lg font-bold">
          <h1>Discover the Fall 2024 Collection</h1>
          <p className="font-light">Embrace the season with our latest styles designed for comfort, warmth, and effortless elegance. From cozy knits to bold outerwear, this collection captures the essence of autumn in every detail. Perfect for crisp mornings and cool evenings, these pieces will keep you looking chic as the leaves begin to fall. Explore the new arrivals now and find your signature look for the season.</p>
        </div>

        <Link to='collection'>Whole Collection</Link>

		<ProductSlider products={ProductsData.products}/>

			</main>
		</>
	);
}
