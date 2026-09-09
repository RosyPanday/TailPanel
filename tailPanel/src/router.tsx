import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard.js";
import Signup from "./pages/signup.js";


export const router =  createBrowserRouter([
    {
        path:"/dashboard",
        element:<Dashboard />
    },
    {
        path:"/",
        element:<Signup />
    }
])