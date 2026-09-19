import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import PersonnelLayout from "./layouts/PersonnelLayout";

import Catalog from "./pages/Catalog/Catalog";
import ProductDetails from "./pages/Product/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import CustomerDashboard from "./pages/Customer/Dashboard";

import AdminDashboard from "./pages/Admin/Dashboard";
import AdminProducts from "./pages/Admin/Products";
import AdminInventory from "./pages/Admin/Inventory";
import AdminSalesReports from "./pages/Admin/SalesReports";
import AdminCustomers from "./pages/Admin/Customers";
import AdminSuppliers from "./pages/Admin/Suppliers";
import AdminDeliveries from "./pages/Admin/Deliveries";
import AdminTaxReports from "./pages/Admin/TaxReports";
import AdminUserManagement from "./pages/Admin/UserManagement";

import PersonnelInventory from "./pages/Personnel/Inventory";
import PersonnelInventoryPrint from "./pages/Personnel/InventoryPrint";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Catalog /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "customer", element: <CustomerDashboard /> },
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
