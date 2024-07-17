import {RouterProvider,createBrowserRouter,} from "react-router-dom";
import { CartProvider } from "react-use-cart";

import Layout from "./components/Layout/Layout";

import ExploreMenu from "./components/ExploreMenu/ExploreMenu.jsx";
import Coupen from "./components/Coupen";
import Cart from "./components/Cartlist.jsx";

import Login from "./components/Login";
import Search from "./components/Search";

import Final from "./Final.jsx";
import DisplayMenu from "./components/ExploreMenu/DisplayMenu.jsx";
import CheckOut from "./components/CheckOut.jsx";





const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path:"/", 
      element:<Final/>}
      ,
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/coupen",
        element: <Coupen />,
      },
      {
        path: "/cart",
        element:<Cart/>,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {path:"/explore",
       element:<DisplayMenu/>
      },
      {path:"/Checkout",
      element:<CheckOut/>
     }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
     
       
    </>
  );
}

export default App;
