export default function AdminUserManagement() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-6">
        Admin User Management
      </h1>

      <div className="flex justify-end mb-4">
        <button className="bg-bedrock-gold text-bedrock-navy font-semibold px-4 py-2 rounded-md shadow-card hover:brightness-110">
          Add New User
        </button>
      </div>

      <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
        <h2 className="text-xl font-serif text-bedrock-navy mb-4">
          Users
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="bg-bedrock-navy text-white">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-bedrock-slate/20">
                <td className="px-4 py-3">Admin User</td>
                <td className="px-4 py-3">admin@bedrockcgt.com</td>
                <td className="px-4 py-3">Admin</td>
                <td className="px-4 py-3">
                  <button className="text-bedrock-navy font-medium hover:underline mr-3">
                    Edit
                  </button>
                  <button className="text-bedrock-red font-medium hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

