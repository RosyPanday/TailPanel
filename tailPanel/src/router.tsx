import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard.js";
import Signup from "./pages/signup.js";
import AddProduct from "./components/layout/product/add-product.js";


export const router =  createBrowserRouter([
    {
        path:"/",
        element:<Dashboard />
    },
    {
        path:"/add-product",
        element:<AddProduct />
    }
])