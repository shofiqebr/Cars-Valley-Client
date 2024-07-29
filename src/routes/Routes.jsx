import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Home from "../pages/home/Home";
import CarsMenu from "../pages/carsMenu/CarsMenu";
import Order from "../pages/order/order/Order";



export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/carMenu',
            element: <CarsMenu></CarsMenu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        }
      ]
    },
  ]);