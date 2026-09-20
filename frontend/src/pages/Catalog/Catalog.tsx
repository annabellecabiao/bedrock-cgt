export default function Catalog() {
  const products = [
    {
      id: 1,
      name: "Valencia Premium Red Wine",
      price: 2450,
      image: "/images/wine1.jpg",
      category: "Wines",
    },
    {
      id: 2,
      name: "Spanish Olive Oil Extra Virgin",
      price: 780,
      image: "/images/olive1.jpg",
      category: "Olive Oils",
    },
    {
      id: 3,
      name: "Rioja Reserva Wine",
      price: 3100,
      image: "/images/wine2.jpg",
      category: "Wines",
    },
    {
      id: 4,
      name: "Andalusian Olive Oil Gold Press",
      price: 950,
      image: "/images/olive2.jpg",
      category: "Olive Oils",
    },
    {
      id: 5,
      name: "Catalan White Wine",
      price: 1800,
      image: "/images/wine3.jpg",
      category: "Wines",
    },
    {
      id: 6,
      name: "Premium Truffle Olive Oil",
      price: 1250,
      image: "/images/olive3.jpg",
      category: "Olive Oils",
    },
  ];

  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-8">
        Product Catalog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <a
            key={product.id}
            href={`/product/${product.id}`}
            className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-64 bg-bedrock-slate/10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-serif text-bedrock-navy mb-2">
                {product.name}
              </h2>

              <p className="text-bedrock-slate mb-2">{product.category}</p>

              <p className="text-bedrock-gold text-2xl font-bold mb-4">
                ₱{product.price.toLocaleString()}
              </p>

              <button className="bg-bedrock-gold text-bedrock-navy font-semibold px-4 py-2 rounded-md shadow-card hover:brightness-110">
                View Details
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

