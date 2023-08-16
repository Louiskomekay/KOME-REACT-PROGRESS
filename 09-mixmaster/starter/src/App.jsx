import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, HomeLayout, Landingpage, Error, Cocktail, Newsletter, SinglePageError } from './pages';

import { loader as landingLoader } from './pages/Landingpage';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from "./pages/Newsletter";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landingpage />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction
      },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
