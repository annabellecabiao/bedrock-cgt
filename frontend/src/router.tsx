import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import PersonnelLayout from "./layouts/PersonnelLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Catalog from "./pages/Catalog/Catalog";
import ProductDetails from "./pages/Product/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

import CustomerDashboard from "./pages/Customer/Dashboard";
import CustomerOrders from "./pages/Customer/Orders";
import CustomerOrderDetails from "./pages/Customer/OrderDetails";

import PersonnelInventory from "./pages/Personnel/Inventory";
import PersonnelInventoryPrint from "./pages/Personnel/InventoryPrint";

import AdminDashboard from "./pages/Admin/Dashboard";
import AdminProducts from "./pages/Admin/Products";
import AdminInventory from "./pages/Admin/Inventory";
import AdminSalesReports from "./pages/Admin/SalesReports";
import AdminCustomers from "./pages/Admin/Customers";
import AdminSuppliers from "./pages/Admin/Suppliers";
import AdminDeliveries from "./pages/Admin/Deliveries";
import AdminTaxReports from "./pages/Admin/TaxReports";
import AdminUserManagement from "./pages/Admin/UserManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "catalog", element: <Catalog /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-success", element: <OrderSuccess /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "customer/dashboard", element: <CustomerDashboard /> },
      { path: "customer/orders", element: <CustomerOrders /> },
      { path: "customer/orders/:id", element: <CustomerOrderDetails /> },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <AdminDashboard /> },
      { path: "products", element: <AdminProducts /> },
      { path: "inventory", element: <AdminInventory /> },
      { path: "sales", element: <AdminSalesReports /> },
      { path: "customers", element: <AdminCustomers /> },
      { path: "suppliers", element: <AdminSuppliers /> },
      { path: "deliveries", element: <AdminDeliveries /> },
      { path: "tax", element: <AdminTaxReports /> },
      { path: "users", element: <AdminUserManagement /> },
    ],
  },

  {
    path: "/personnel",
    element: <PersonnelLayout />,
    children: [
      { path: "inventory", element: <PersonnelInventory /> },
      { path: "inventory/print", element: <PersonnelInventoryPrint /> },
    ],
  },
]);

export default router;
