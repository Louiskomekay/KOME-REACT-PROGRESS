import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, HomeLayout, Landingpage, Error, Cocktail, Newsletter, SinglePageError } from './pages';

import { loader as landingLoader, loader } from './pages/Landingpage';


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
