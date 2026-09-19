import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-hero">
      <div className="home-hero-content">
        <h1>Premium Imports, Solid Foundations.</h1>
        <p>
          Bedrock Consumer Goods Trading brings carefully selected wines, olive oils, and future products
          to customers who value quality and long-term growth.
        </p>
        <div className="home-hero-actions">
          <Link to="/catalog" className="btn-primary">
            Shop Catalog
          </Link>
          <Link to="/about" className="btn-secondary">
            Learn About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
