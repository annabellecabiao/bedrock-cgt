import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-bedrock-navy text-white shadow-lg px-6 py-4 flex items-center justify-between">
      {/* Logo + Company Name */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/images/logo.png"
          alt="Bedrock CGT Logo"
          className="h-12 w-12 object-contain"
        />
        <span className="text-xl font-serif tracking-wide">
          Bedrock Consumer Goods Trading
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 text-lg font-semibold">
        <Link to="/" className="hover:text-bedrock-gold transition-all">
          Home
        </Link>
        <Link to="/catalog" className="hover:text-bedrock-gold transition-all">
          Catalog
        </Link>
        <Link to="/about" className="hover:text-bedrock-gold transition-all">
          About Us
        </Link>
        <Link to="/login" className="hover:text-bedrock-gold transition-all">
          Login
        </Link>
      </div>
    </nav>
  );
}
