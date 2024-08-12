import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Home from "../pages/home/Home";
import CarsMenu from "../pages/carsMenu/CarsMenu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";



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
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
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