export default function Catalog() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-8">
        Product Catalog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white shadow-card rounded-lg p-5 border border-bedrock-slate/20">
          <h2 className="text-xl font-semibold text-bedrock-navy mb-4">
            Filters
          </h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
          />

          {/* Categories */}
          <div className="mt-6">
            <h3 className="text-bedrock-navy font-medium mb-2">Categories</h3>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-bedrock-gold" />
                Wines
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-bedrock-gold" />
                Olive Oils
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-bedrock-gold" />
                Other Products
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Product Card */}
          <div className="bg-white shadow-card rounded-lg p-4 border border-bedrock-slate/20">
            <div className="h-40 bg-bedrock-slate/10 rounded-md mb-4"></div>

            <h3 className="text-bedrock-navy font-semibold">Product Name</h3>
            <p className="text-bedrock-slate text-sm mb-2">Short description</p>

            <p className="text-bedrock-gold font-bold mb-4">₱1,234.56</p>

            <button className="bg-bedrock-gold text-bedrock-navy font-semibold px-4 py-2 rounded-md hover:brightness-110">
              Add to Cart
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
