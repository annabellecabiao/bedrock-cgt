export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bedrock-white px-6 py-10">
      <div className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-10 w-full max-w-md">
        
        {/* Logo + Title */}
        <h1 className="text-3xl font-serif text-bedrock-navy text-center mb-6">
          Login
        </h1>

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

        {/* Login Button */}
        <button className="w-full bg-bedrock-gold text-bedrock-navy font-semibold px-6 py-3 rounded-md shadow-card hover:brightness-110">
          Login
        </button>

        {/* Links */}
        <div className="text-center mt-6">
          <button className="text-bedrock-navy font-medium hover:underline">
            Forgot Password
          </button>
        </div>

        <div className="text-center mt-4">
          <span className="text-bedrock-slate">Don't have an account?</span>
          <a href="/signup" className="text-bedrock-gold font-semibold ml-1 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
