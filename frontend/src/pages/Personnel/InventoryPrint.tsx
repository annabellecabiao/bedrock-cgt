export default function PersonnelInventoryPrint() {
  return (
    <div className="p-10 bg-white print:p-0">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-6 text-center">
        Bedrock CGT — Inventory Report
      </h1>

      <table className="table-auto w-full border border-bedrock-slate/30">
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
        </tbody>
      </table>
    </div>
  );
}

