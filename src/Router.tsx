import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, AllProducts } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/todos-productos',
    element: <AllProducts />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
