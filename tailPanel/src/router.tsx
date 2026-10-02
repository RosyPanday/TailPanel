import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard.js";
import AddProduct from "./pages/add-product.js";
import ViewProducts from "./pages/view-products.js";
import AddInvoice from "./pages/add-invoice.js";
import ViewInvoices from "./pages/view-invoices.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/products",
    element: <ViewProducts />,
  },
  {
    path: "/create-invoice",
    element: <AddInvoice />,
  },
  {
    path: "/invoices",
    element: <ViewInvoices />,
  },
]);
