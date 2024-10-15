export default function Product({ product }) {

	return (
		<div className="relative w-full pb-[133.33%] bg-gray-200">
			<div className="absolute bottom-0 w-full flex justify-between p-4">
				<p className="w-1/2 text-left">{product.name}</p>
				<p className="w-1/2 text-right mt-auto">{product.price}</p>
			</div>
		</div>
	);
}
