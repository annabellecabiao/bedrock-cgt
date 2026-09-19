export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-serif text-bedrock-navy mb-8">
        Customer Dashboard
      </h1>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Profile Card */}
        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <h2 className="text-xl font-serif text-bedrock-navy mb-4">
            Your Profile
          </h2>

          <p className="text-bedrock-slate mb-2">
            <span className="font-medium text-bedrock-navy">Name:</span> Juan Dela Cruz
          </p>

          <p className="text-bedrock-slate mb-2">
            <span className="font-medium text-bedrock-navy">Email:</span> juan@example.com
          </p>

          <p className="text-bedrock-slate mb-6">
            <span className="font-medium text-bedrock-navy">Phone:</span> +34 123 456 789
          </p>

          <button className="bg-bedrock-gold text-bedrock-navy font-semibold px-4 py-2 rounded-md shadow-card hover:brightness-110">
            Edit Profile
          </button>
        </div>

        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <h2 className="text-xl font-serif text-bedrock-navy mb-6">
            Recent Orders
          </h2>

          {/* Example Order */}
          <div className="border-b border-bedrock-slate/20 pb-4 mb-4">
            <p className="text-bedrock-navy font-medium">
              Order #12345
            </p>
            <p className="text-bedrock-slate text-sm">
              Placed on: September 10, 2026
            </p>
            <p className="text-bedrock-gold font-semibold mt-2">
              Total: ₱2,450.00
            </p>
            <button className="mt-3 text-bedrock-navy font-medium hover:underline">
              View Details
            </button>
          </div>

          {/* Example Order */}
          <div className="border-b border-bedrock-slate/20 pb-4 mb-4">
            <p className="text-bedrock-navy font-medium">
              Order #12344
            </p>
            <p className="text-bedrock-slate text-sm">
              Placed on: September 5, 2026
            </p>
            <p className="text-bedrock-gold font-semibold mt-2">
              Total: ₱1,150.00
            </p>
            <button className="mt-3 text-bedrock-navy font-medium hover:underline">
              View Details
            </button>
          </div>

          <button className="mt-6 bg-bedrock-gold text-bedrock-navy font-semibold px-4 py-2 rounded-md shadow-card hover:brightness-110">
            View All Orders
          </button>
        </div>
      </div>
    </div>
  );
}

