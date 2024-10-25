import { useContext } from "react";
import ProductList from "../components/ProductList.jsx";
import { ProductFilterContext } from "../context/ProductFilterContext.jsx";

export default function Collection() {
	const { gender, setGender } = useContext(ProductFilterContext);
	const { productType, setProductType } = useContext(ProductFilterContext);

	return (
		<>
			<main className="px-4 py-12 max-w-screen-lg min-h-screen mx-auto m-12 text-stone-900">
				<div className="mb-4 flex items-center gap-6">
					<div>
						<label>Gender:</label>
						<select
							className="border p-2 ml-2"
							value={gender}
							onChange={(e) => setGender(e.target.value)}>
							<option value="">All</option>
							<option value="men">Men</option>
							<option value="women">Women</option>
						</select>
					</div>
					<div>
						<label>Type:</label>
						<select
							className="border p-2 ml-2"
							value={productType}
							onChange={(e) => setProductType(e.target.value)}>
              <option value="">All</option>
							<option value="t-shirt">T-Shirt</option>
							<option value="jeans">Jeans</option>
							<option value="jacket">Jacket</option>
							<option value="sweater">Sweater</option>
						</select>
					</div>
				</div>

				<ProductList />
			</main>
		</>
	);
}
