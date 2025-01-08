
import MainLayout from "@/layout/MainLayout";
import Error from "@/pages/error/Error";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
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
        path:'/error',
        element:<Error/>
    }
])