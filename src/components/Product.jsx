import { Link } from "react-router-dom"

export default function Product({ product }) {

	return (
		<Link to={`/products/${product.id}`}>
        <div className="aspect-w-6 aspect-h-9">
          <img
            src={product.image}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full flex justify-between p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <p className="w-1/2 text-left mt-auto">{product.name}</p>
            <p className="w-1/2 text-right mt-auto text-xl">{product.price}</p>
          </div>
        </div>
      </Link>
	);
}
