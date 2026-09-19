export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-bedrock-white">

      {/* SIDEBAR */}
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

      {/* MAIN CONTENT */}
      <main className="flex-1 px-10 py-10">

        {/* PAGE TITLE */}
        <h1 className="text-3xl font-serif text-bedrock-navy mb-10">
          Admin Dashboard
        </h1>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">

          <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
            <p className="text-bedrock-slate">Total Sales</p>
            <p className="text-3xl font-bold text-bedrock-gold mt-2">₱125,450</p>
          </div>

          <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
            <p className="text-bedrock-slate">Inventory Value</p>
            <p className="text-3xl font-bold text-bedrock-gold mt-2">₱89,300</p>
          </div>

          <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
            <p className="text-bedrock-slate">Monthly Revenue</p>
            <p className="text-3xl font-bold text-bedrock-gold mt-2">₱18,900</p>
          </div>

          <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
            <p className="text-bedrock-slate">Pending Deliveries</p>
            <p className="text-3xl font-bold text-bedrock-gold mt-2">12</p>
          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <h2 className="text-xl font-serif text-bedrock-navy mb-6">
            Recent Orders
          </h2>

          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="bg-bedrock-navy text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Order ID</th>
                  <th className="px-4 py-3 text-left">Customer</th>
                  <th className="px-4 py-3 text-left">Total</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-bedrock-slate/20">
                  <td className="px-4 py-3">#12345</td>
                  <td className="px-4 py-3">Juan Dela Cruz</td>
                  <td className="px-4 py-3 text-bedrock-gold">₱2,450</td>
                  <td className="px-4 py-3">Completed</td>
                  <td className="px-4 py-3">Sept 10, 2026</td>
                </tr>

                <tr className="border-b border-bedrock-slate/20">
                  <td className="px-4 py-3">#12344</td>
                  <td className="px-4 py-3">Maria Santos</td>
                  <td className="px-4 py-3 text-bedrock-gold">₱1,150</td>
                  <td className="px-4 py-3">Pending</td>
                  <td className="px-4 py-3">Sept 9, 2026</td>
                </tr>

                <tr className="border-b border-bedrock-slate/20">
                  <td className="px-4 py-3">#12343</td>
                  <td className="px-4 py-3">Carlos Reyes</td>
                  <td className="px-4 py-3 text-bedrock-gold">₱3,200</td>
                  <td className="px-4 py-3">Processing</td>
                  <td className="px-4 py-3">Sept 8, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

