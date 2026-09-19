export default function AdminSalesReports() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-6">
        Admin Sales Reports
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <p className="text-bedrock-slate">Total Sales (This Month)</p>
          <p className="text-2xl font-bold text-bedrock-gold mt-2">₱18,900</p>
        </div>
        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <p className="text-bedrock-slate">Total Orders</p>
          <p className="text-2xl font-bold text-bedrock-gold mt-2">45</p>
        </div>
        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <p className="text-bedrock-slate">Average Order Value</p>
          <p className="text-2xl font-bold text-bedrock-gold mt-2">₱420</p>
        </div>
      </div>

      <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
        <h2 className="text-xl font-serif text-bedrock-navy mb-4">
          Recent Sales
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="bg-bedrock-navy text-white">
              <tr>
                <th className="px-4 py-3 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Customer</th>
                <th className="px-4 py-3 text-left">Total</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-bedrock-slate/20">
                <td className="px-4 py-3">#12345</td>
                <td className="px-4 py-3">Juan Dela Cruz</td>
                <td className="px-4 py-3 text-bedrock-gold">₱2,450</td>
                <td className="px-4 py-3">Sept 10, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

