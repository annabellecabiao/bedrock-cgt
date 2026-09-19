export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bedrock-white px-6 py-10">
      <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-10 w-full max-w-md">
        
        {/* Logo + Title */}
        <h1 className="text-3xl font-serif text-bedrock-navy text-center mb-6">
          Create Account
        </h1>

        {/* Full Name */}
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
        <div className="mb-4">
          <label className="block text-bedrock-navy font-medium mb-1">
            Address
          </label>
          <textarea
            className="w-full border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
            rows={3}
            placeholder="Street, City, Province, ZIP"
          ></textarea>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-bedrock-navy font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-bedrock-slate rounded-md px-3 py-2 focus:outline-bedrock-gold"
            placeholder="••••••••"
          />
        </div>

        {/* Signup Button */}
        <button className="w-full bg-bedrock-gold text-bedrock-navy font-semibold px-6 py-3 rounded-md shadow-card hover:brightness-110">
          Create Account
        </button>

        {/* Login Link */}
        <div className="text-center mt-6">
          <span className="text-bedrock-slate">Already have an account?</span>
          <a href="/login" className="text-bedrock-gold font-semibold ml-1 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
