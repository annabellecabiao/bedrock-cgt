export default function AdminSuppliers() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-6">
        Admin – Suppliers
      </h1>

      <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
        <h2 className="text-xl font-serif text-bedrock-navy mb-4">
          Supplier List
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="bg-bedrock-navy text-white">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-bedrock-slate/20">
                <td className="px-4 py-3">Valencia Premium Imports</td>
                <td className="px-4 py-3">Valencia, Spain</td>
                <td className="px-4 py-3">+34 987 654 321</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

