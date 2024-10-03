import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Collection from './pages/Collection.jsx';

const router = createBrowserRouter([
  {path: '/', element: <HomePage /> },
  {path: '/collection', element: <Collection /> }
])


function App() {

  return <RouterProvider router={router} />;
}

export default App
