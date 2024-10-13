import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Collection from "./pages/Collection.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { ProductFilterProvider } from "./context/ProductFilterContext.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
    errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/collection", element: <Collection /> },
			{ path: "/contact", element: <ContactPage /> },
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
