import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          {/* Replace with <img src={logo} /> when you wire assets */}
          <span className="navbar-logo-mark">🦬</span>
          <span className="navbar-logo-text">Bedrock Consumer Goods Trading</span>
        </div>
      </div>
      <ul className="navbar-links">
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Login / Sign Up</Link></li>
      </ul>
    </nav>
  );
}

