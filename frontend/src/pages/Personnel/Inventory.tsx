export default function PersonnelInventory() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-6">
        Inventory Overview
      </h1>

      {/* Print Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => window.open("/personnel/inventory/print")}
          className="bg-bedrock-gold text-bedrock-navy font-semibold px-4 py-2 rounded-md shadow-card hover:brightness-110"
        >
          Print Inventory
        </button>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto bg-white shadow-card rounded-lg border border-bedrock-slate/20">
        <table className="table-auto w-full">
          <thead className="bg-bedrock-navy text-white">
            <tr>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">SKU</th>
              <th className="px-4 py-3 text-left">Stock</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-bedrock-slate/20">
              <td className="px-4 py-3">Sample Product</td>
              <td className="px-4 py-3">Wines</td>
              <td className="px-4 py-3">SKU-001</td>
              <td className="px-4 py-3">120</td>
            </tr>

            <tr className="border-b border-bedrock-slate/20">
              <td className="px-4 py-3">Sample Product 2</td>
              <td className="px-4 py-3">Olive Oils</td>
              <td className="px-4 py-3">SKU-002</td>
              <td className="px-4 py-3">45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
