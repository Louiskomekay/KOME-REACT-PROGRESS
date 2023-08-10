import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, HomeLayout, Landingpage, Error, Cocktail, Newsletter } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landingpage />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'cocktail',
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
