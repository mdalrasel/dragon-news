import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";



export  const router = createBrowserRouter([
    {
      path: "/",
      Component:MainLayout,
      children:[
        {
            path:'/',
            Component: Home
        },
        {
            path:'/category/:id',
            Component: CategoryNews
        },
        {
            path:'about',
            element:<div>About</div>
        },
        {
            path:'career',
            element:<div>career</div>
        }
      ]
    },
  ]);