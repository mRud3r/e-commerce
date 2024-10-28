import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Collection from "./pages/Collection.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { ProductFilterProvider } from "./context/ProductFilterContext.jsx";
import ProductDetail from './pages/ProductDetail.jsx'
import CheckoutPage from "./pages/CheckoutPage.jsx";

const router = createBrowserRouter([
	{
		path: "/e-commerce/",
		element: <RootLayout />,
    errorElement: <ErrorPage />,
		children: [
			{ path: "/e-commerce/", element: <HomePage /> },
			{ path: "/e-commerce/collection", element: <Collection /> },
			{ path: "/e-commerce/contact", element: <ContactPage /> },
			{ path: "/e-commerce/products/:productId", element: <ProductDetail /> },
			{ path: "/e-commerce/checkout", element: <CheckoutPage />},
		],
	},
]);

function App() {
	return (
	<CartProvider>
		<ProductFilterProvider>
		<RouterProvider router={router} />
		</ProductFilterProvider>
	</CartProvider>
	);
}

export default App;
