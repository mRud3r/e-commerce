import { Link } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import { useContext } from "react";
import { ProductFilterContext } from "../context/ProductFilterContext";

export default function HomePage() {
	const {productsForMen, productsForWomen} = useContext(ProductFilterContext);
	return (
		<>
		<header className="h-screen w-full flex items-center justify-center bg-[url('/images/hero.jpg')] bg-cover">
		<div className="absolute bg-black w-full h-full z-1 opacity-40"></div>
				<Link to='/e-commerce/collection' className="text-4xl font-black text-stone-50 z-20">Whole Collection</Link>
		</header>
			<main className="w-full flex flex-col items-center min-h-screen px-2 mb-40">
        <div className="p-6 flex flex-col items-center justify-center w-full max-w-[800px] gap-24 my-40 text-lg font-bold">
          <h1>Fashion Forward</h1>
          <p className="font-light">Dive into our fashion collection, showcasing a range of clothing designed for every occasion. From casual wear that exudes comfort to chic pieces perfect for a night out, our selection is all about versatility. We pay attention to the latest trends while ensuring timeless designs that you’ll love to wear season after season. Each item is crafted with care, using high-quality fabrics that feel as good as they look.</p>
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
