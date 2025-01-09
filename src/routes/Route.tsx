
import MainLayout from "@/layout/MainLayout";
import Error from "@/pages/error/Error";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Signup from "@/pages/resister/Signup";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/" ,
        element: <MainLayout/>,
        children:[
            {
                index:true,
                element: <Home/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/error',
        element:<Error/>
    }
])