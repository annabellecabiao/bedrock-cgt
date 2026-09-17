import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/productsApi';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="product-list">
      {products.map(p => (
        <div key={p.id} className="product-card">
          <img src={p.image_url} alt={p.name} />
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <span>€{p.price}</span>
        </div>
      ))}
    </div>
  );
}
