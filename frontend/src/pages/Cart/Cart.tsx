export default function Cart() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-serif text-bedrock-navy mb-8">
        Your Cart
      </h1>

      {/* Cart Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <h2 className="text-xl font-serif text-bedrock-navy mb-6">
            Items in Your Cart
          </h2>

          {/* Example Cart Item */}
          <div className="flex items-center gap-6 border-b border-bedrock-slate/20 pb-6 mb-6">
            {/* Product Image */}
            <div className="w-32 h-32 bg-bedrock-slate/10 rounded-lg"></div>

            {/* Product Info */}
            <div className="flex-1">
              <h3 className="text-bedrock-navy font-semibold text-lg">
                Sample Premium Wine
              </h3>
              <p className="text-bedrock-slate text-sm mb-2">
                Category: Wines
              </p>

              <p className="text-bedrock-gold font-bold text-xl mb-4">
                ₱2,450.00
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-3">
                <label className="text-bedrock-navy font-medium">Qty:</label>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-20 border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
                />
              </div>
            </div>

            {/* Remove Button */}
            <button className="text-bedrock-red font-semibold hover:underline">
              Remove
            </button>
          </div>

          {/* Another Example Item */}
          <div className="flex items-center gap-6 border-b border-bedrock-slate/20 pb-6 mb-6">
            <div className="w-32 h-32 bg-bedrock-slate/10 rounded-lg"></div>

            <div className="flex-1">
              <h3 className="text-bedrock-navy font-semibold text-lg">
                Extra Virgin Olive Oil
              </h3>
              <p className="text-bedrock-slate text-sm mb-2">
                Category: Olive Oils
              </p>

              <p className="text-bedrock-gold font-bold text-xl mb-4">
                ₱1,150.00
              </p>

              <div className="flex items-center gap-3">
                <label className="text-bedrock-navy font-medium">Qty:</label>
                <input
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="w-20 border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
                />
              </div>
            </div>

            <button className="text-bedrock-red font-semibold hover:underline">
              Remove
            </button>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6 h-fit">
          <h2 className="text-xl font-serif text-bedrock-navy mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span className="text-bedrock-slate">Subtotal</span>
            <span className="text-bedrock-navy font-medium">₱3,600.00</span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-bedrock-slate">Shipping</span>
            <span className="text-bedrock-navy font-medium">₱150.00</span>
          </div>

          <div className="flex justify-between mb-6">
            <span className="text-bedrock-slate">Tax</span>
            <span className="text-bedrock-navy font-medium">₱0.00</span>
          </div>

          <div className="flex justify-between mb-6 text-xl font-bold text-bedrock-navy">
            <span>Total</span>
            <span className="text-bedrock-gold">₱3,750.00</span>
          </div>

          <button className="w-full bg-bedrock-gold text-bedrock-navy font-semibold px-6 py-3 rounded-md shadow-card hover:brightness-110">
            Proceed to Checkout
          </button>

          <button className="w-full mt-4 text-bedrock-navy font-medium hover:underline">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

