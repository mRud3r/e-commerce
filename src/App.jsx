import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Collection from "./pages/Collection.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ContactPage from "./pages/ContactPage.jsx";

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
	<RouterProvider router={router} />
	</CartProvider>
	);
}

export default App;
