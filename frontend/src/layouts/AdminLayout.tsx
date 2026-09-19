import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-bedrock-white">

      {/* Sidebar */}
      <aside className="w-64 bg-bedrock-navy text-white flex flex-col py-8 px-6">
        <h2 className="text-2xl font-serif mb-8 text-bedrock-gold">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-4">
          <a className="hover:text-bedrock-gold font-medium" href="/admin">
            Dashboard
          </a>
          <a className="hover:text-bedrock-gold font-medium" href="/admin/products">
            Products
          </a>
          <a className="hover:text-bedrock-gold font-medium" href="/admin/inventory">
            Inventory
          </a>
          <a className="hover:text-bedrock-gold font-medium" href="/admin/sales">
            Sales Reports
          </a>
          <a className="hover:text-bedrock-gold font-medium" href="/admin/customers">
            Customers
          </a>
          <a className="hover:text-bedrock-gold font-medium" href="/admin/suppliers">
            Suppliers
          </a>
          <a className="hover:text-bedrock-gold font-medium" href="/admin/deliveries">
            Deliveries
          </a>
          <a className="hover:text-bedrock-gold font-medium" href="/admin/tax">
            Tax Reports
          </a>
          <a className="hover:text-bedrock-gold font-medium" href="/admin/users">
            User Management
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-10">
        <Outlet />
      </main>
    </div>
  );
}
