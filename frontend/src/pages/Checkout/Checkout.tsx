export default function Checkout() {
  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-serif text-bedrock-navy mb-8">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left Column – Customer Info */}
        <div className="lg:col-span-2 bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6">
          <h2 className="text-xl font-serif text-bedrock-navy mb-6">
            Customer Information
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-bedrock-navy font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
              placeholder="Juan Dela Cruz"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-bedrock-navy font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-bedrock-navy font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
              placeholder="+34 123 456 789"
            />
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block text-bedrock-navy font-medium mb-1">
              Delivery Address
            </label>
            <textarea
              className="w-full border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
              rows={3}
              placeholder="Street, City, Province, ZIP"
            ></textarea>
          </div>

          {/* Delivery Options */}
          <h2 className="text-xl font-serif text-bedrock-navy mb-4">
            Delivery Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <label className="border border-bedrock-slate/30 rounded-lg p-4 cursor-pointer hover:border-bedrock-gold">
              <input type="radio" name="delivery" className="accent-bedrock-gold mr-2" />
              Lalamove
            </label>

            <label className="border border-bedrock-slate/30 rounded-lg p-4 cursor-pointer hover:border-bedrock-gold">
              <input type="radio" name="delivery" className="accent-bedrock-gold mr-2" />
              Grab Express
            </label>

            <label className="border border-bedrock-slate/30 rounded-lg p-4 cursor-pointer hover:border-bedrock-gold">
              <input type="radio" name="delivery" className="accent-bedrock-gold mr-2" />
              Local Courier
            </label>

            <label className="border border-bedrock-slate/30 rounded-lg p-4 cursor-pointer hover:border-bedrock-gold">
              <input type="radio" name="delivery" className="accent-bedrock-gold mr-2" />
              Pickup (Store)
            </label>
          </div>

          {/* Payment Options */}
          <h2 className="text-xl font-serif text-bedrock-navy mb-4">
            Payment Method
          </h2>

          <div className="flex flex-col gap-3 mb-6">
            <label className="flex items-center gap-3">
              <input type="radio" name="payment" className="accent-bedrock-gold" />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" className="accent-bedrock-gold" />
              GCash
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" className="accent-bedrock-gold" />
              Bank Transfer
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" className="accent-bedrock-gold" />
              Credit / Debit Card
            </label>
          </div>
        </div>

        {/* Right Column – Order Summary */}
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
            Place Order
          </button>

          <button className="w-full mt-4 text-bedrock-navy font-medium hover:underline">
            Return to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

