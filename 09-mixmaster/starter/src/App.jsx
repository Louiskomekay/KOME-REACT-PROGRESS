import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, HomeLayout, Landingpage, Error, Cocktail, Newsletter } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />
  },
  {
    path: '/about',
    element: <About />
  },
])

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
