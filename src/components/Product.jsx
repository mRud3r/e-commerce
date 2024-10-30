import { Link } from "react-router-dom"
import { currencyFormatter } from "../util";

export default function Product({ product }) {

	return (
		<Link to={`/e-commerce/collection/${product.id}`}>
        <div className="aspect-w-6 aspect-h-9">
          <img
            src={product.image}
            alt={product.alt}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full flex justify-between p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <p className="w-1/2 text-left mt-auto">{product.name}</p>
            <p className="w-1/2 text-right mt-auto text-xl">{currencyFormatter.format(product.price)}</p>
          </div>
        </div>
      </Link>
	);
}
