import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard.js";
import AddProduct from "./components/layout/product/add-product.js";
import ViewProducts from "./components/layout/viewProducts/view-products.js";


export const router =  createBrowserRouter([
    {
        path:"/",
        element:<Dashboard />
    },
    {
        path:"/add-product",
        element:<AddProduct />
    },
    {
        path:"/products",
        element:<ViewProducts />
    }
])