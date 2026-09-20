import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import PersonnelLayout from "../layouts/PersonnelLayout";

// Public Pages
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import ProductDetails from "../pages/Product/ProductDetails";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";

// Auth Pages
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

// Customer Pages
import CustomerDashboard from "../pages/Customer/Dashboard";
import CustomerOrders from "../pages/Customer/Orders";
import CustomerOrderDetails from "../pages/Customer/OrderDetails";

// Personnel Pages (Inventory ONLY)
import PersonnelDashboard from "../pages/Personnel/Dashboard";
import PersonnelInventory from "../pages/Personnel/Inventory";
import PersonnelInventoryPrint from "../pages/Personnel/InventoryPrint";

// Admin Pages
import AdminDashboard from "../pages/Admin/Dashboard";
import AdminProducts from "../pages/Admin/Products";
import AdminInventory from "../pages/Admin/Inventory";
import AdminSalesReports from "../pages/Admin/SalesReports";
import AdminCustomers from "../pages/Admin/Customers";
import AdminSuppliers from "../pages/Admin/Suppliers";
import AdminDeliveries from "../pages/Admin/Deliveries";
import AdminTaxReports from "../pages/Admin/TaxReports";
import AdminUsers from "../pages/Admin/UserManagement";

// Protected Route Component
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

      {/* HOME — OUTSIDE MAINLAYOUT */}
      <Route path="/" element={<Home />} />

      {/* PUBLIC ROUTES USING MAINLAYOUT */}
      <Route element={<MainLayout />}>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* CUSTOMER ROUTES */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/orders" element={<CustomerOrders />} />
        <Route path="/customer/orders/:id" element={<CustomerOrderDetails />} />
      </Route>

      {/* PERSONNEL ROUTES */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["personnel"]}>
            <PersonnelLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/personnel/dashboard" element={<PersonnelDashboard />} />
        <Route path="/personnel/inventory" element={<PersonnelInventory />} />
        <Route path="/personnel/inventory/print" element={<PersonnelInventoryPrint />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/inventory" element={<AdminInventory />} />
        <Route path="/admin/sales-reports" element={<AdminSalesReports />} />
        <Route path="/admin/customers" element={<AdminCustomers />} />
        <Route path="/admin/suppliers" element={<AdminSuppliers />} />
        <Route path="/admin/deliveries" element={<AdminDeliveries />} />
        <Route path="/admin/tax-reports" element={<AdminTaxReports />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Route>

    </Routes>

    </BrowserRouter>
  );
}
