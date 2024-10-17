import { Link } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import { useContext } from "react";
import { ProductFilterContext } from "../context/ProductFilterContext";

export default function HomePage() {
	const {productsForMen, productsForWomen} = useContext(ProductFilterContext);
	return (
		<>
		<header className="h-screen w-full flex items-center justify-center bg-[url('/images/hero.jpg')] bg-cover">
			<div>
				<h1 className="text-4xl font-black text-stone-50">New Supply</h1>
			</div>
		</header>
			<main className="w-full flex flex-col items-center min-h-screen px-2">
        <div className="p-6 flex flex-col items-center justify-center w-6/12 gap-6 my-28 text-lg font-bold">
          <h1>Discover the Fall 2024 Collection</h1>
          <p className="font-light">Embrace the season with our latest styles designed for comfort, warmth, and effortless elegance. From cozy knits to bold outerwear, this collection captures the essence of autumn in every detail. Perfect for crisp mornings and cool evenings, these pieces will keep you looking chic as the leaves begin to fall. Explore the new arrivals now and find your signature look for the season.</p>
		  <Link to='collection'>Whole Collection</Link>
        </div>
		<div className="w-full flex flex-col gap-20">
			<div>
				<p className="text-2xl font-bold ms-8 mb-8">For Men</p>
			<ProductSlider products={productsForMen}/>
			</div>
			<div>
				<p className="text-2xl font-bold ms-8 mb-8">For Women</p>
			<ProductSlider products={productsForWomen}/>
			</div>
		</div>
			</main>
		</>
	);
}
