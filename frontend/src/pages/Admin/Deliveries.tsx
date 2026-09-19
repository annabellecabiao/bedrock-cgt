export default function AdminDeliveries() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-6">
        Admin – Deliveries
      </h1>

      <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
        <h2 className="text-xl font-serif text-bedrock-navy mb-4">
          Delivery Status
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="bg-bedrock-navy text-white">
              <tr>
                <th className="px-4 py-3 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Courier</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">ETA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-bedrock-slate/20">
                <td className="px-4 py-3">#12345</td>
                <td className="px-4 py-3">Lalamove</td>
                <td className="px-4 py-3">In Transit</td>
                <td className="px-4 py-3">Sept 12, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

