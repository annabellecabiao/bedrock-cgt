export default function ProductDetails() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-serif text-bedrock-navy mb-8">
        Product Details
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Product Image */}
        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <div className="w-full h-96 bg-bedrock-slate/10 rounded-lg"></div>
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-2xl font-serif text-bedrock-navy mb-2">
            Sample Premium Wine
          </h2>

          <p className="text-bedrock-slate mb-4">
            Category: Wines
          </p>

          <p className="text-bedrock-gold text-3xl font-bold mb-6">
            ₱2,450.00
          </p>

          {/* Stock Status */}
          <p className="text-bedrock-navy font-medium mb-4">
            In Stock: <span className="text-bedrock-gold">120 units</span>
          </p>

          {/* Supplier Info */}
          <p className="text-bedrock-slate mb-6">
            Supplier: Valencia Premium Imports
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <label className="text-bedrock-navy font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-20 border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
            />
          </div>

          {/* Add to Cart Button */}
          <button className="bg-bedrock-gold text-bedrock-navy font-semibold px-6 py-3 rounded-md shadow-card hover:brightness-110">
            Add to Cart
          </button>

          {/* Description */}
          <div className="mt-10">
            <h3 className="text-xl font-serif text-bedrock-navy mb-3">
              Description
            </h3>
            <p className="text-bedrock-slate leading-relaxed">
              This premium wine is sourced from the finest vineyards in Spain. 
              It features a rich aroma, smooth texture, and a balanced flavor profile 
              perfect for celebrations, gifts, or personal enjoyment.
            </p>
          </div>

          {/* Tasting Notes */}
          <div className="mt-10">
            <h3 className="text-xl font-serif text-bedrock-navy mb-3">
              Tasting Notes
            </h3>
            <ul className="list-disc ml-6 text-bedrock-slate leading-relaxed">
              <li>Rich berry aroma</li>
              <li>Soft tannins</li>
              <li>Balanced acidity</li>
              <li>Long, smooth finish</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

