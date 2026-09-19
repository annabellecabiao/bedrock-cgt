export default function AdminTaxReports() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-6">
        Admin – Tax Reports
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <p className="text-bedrock-slate">Total Tax (This Year)</p>
          <p className="text-2xl font-bold text-bedrock-gold mt-2">₱35,000</p>
        </div>
        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <p className="text-bedrock-slate">Taxable Sales</p>
          <p className="text-2xl font-bold text-bedrock-gold mt-2">₱250,000</p>
        </div>
      </div>

      <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
        <h2 className="text-xl font-serif text-bedrock-navy mb-4">
          Tax Report Entries
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="bg-bedrock-navy text-white">
              <tr>
                <th className="px-4 py-3 text-left">Period</th>
                <th className="px-4 py-3 text-left">Tax Amount</th>
                <th className="px-4 py-3 text-left">Filed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-bedrock-slate/20">
                <td className="px-4 py-3">Q3 2026</td>
                <td className="px-4 py-3 text-bedrock-gold">₱12,000</td>
                <td className="px-4 py-3">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

