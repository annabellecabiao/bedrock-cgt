import { useState, useMemo } from "react";

export default function Catalog() {
  const products = [
    { id: 1, name: "Valencia Premium Red Wine", price: 2450, image: "/images/wine1.jpg", category: "Wines" },
    { id: 2, name: "Spanish Olive Oil Extra Virgin", price: 780, image: "/images/olive1.jpg", category: "Olive Oils" },
    { id: 3, name: "Rioja Reserva Wine", price: 3100, image: "/images/wine2.jpg", category: "Wines" },
    { id: 4, name: "Andalusian Olive Oil Gold Press", price: 950, image: "/images/olive2.jpg", category: "Olive Oils" },
    { id: 5, name: "Catalan White Wine", price: 1800, image: "/images/wine3.jpg", category: "Wines" },
    { id: 6, name: "Premium Truffle Olive Oil", price: 1250, image: "/images/olive3.jpg", category: "Olive Oils" },
    { id: 7, name: "Galician Red Wine Reserva", price: 2700, image: "/images/wine4.jpg", category: "Wines" },
    { id: 8, name: "Mediterranean Olive Oil Blend", price: 650, image: "/images/olive4.jpg", category: "Olive Oils" },
    { id: 9, name: "Basque Country White Wine", price: 2100, image: "/images/wine5.jpg", category: "Wines" },
  ];

  const categories = ["All", "Wines", "Olive Oils"];
  const sortOptions = ["Default", "Price: Low to High", "Price: High to Low"];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Default");
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  const filteredProducts = useMemo(() => {
    let result = products;

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    if (sort === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, category, sort]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10">
      <h1 className="text-3xl font-serif text-bedrock-navy mb-8">
        Product Catalog
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-bedrock-slate/30 rounded-md px-4 py-2 w-full md:w-1/3"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          className="border border-bedrock-slate/30 rounded-md px-4 py-2 w-full md:w-1/4"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          className="border border-bedrock-slate/30 rounded-md px-4 py-2 w-full md:w-1/4"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          {sortOptions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {paginatedProducts.map((product) => (
          <a
            key={product.id}
            href={`/product/${product.id}`}
            className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
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

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-bedrock-navy text-white rounded-md disabled:opacity-40"
        >
          Previous
        </button>

        <span className="text-bedrock-navy font-serif text-lg">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-bedrock-navy text-white rounded-md disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
