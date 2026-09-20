import { useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: "New" | "Best Seller" | "Limited";
  inStock: boolean;
};

async function fetchProducts(): Promise<Product[]> {
  // Mock API – later you can replace with real fetch("/api/products")
  return [
    {
      id: 1,
      name: "Valencia Premium Red Wine",
      price: 2450,
      image: "/images/wine1.jpg",
      category: "Wines",
      badge: "Best Seller",
      inStock: true,
    },
    {
      id: 2,
      name: "Spanish Olive Oil Extra Virgin",
      price: 780,
      image: "/images/olive1.jpg",
      category: "Olive Oils",
      badge: "New",
      inStock: true,
    },
    {
      id: 3,
      name: "Rioja Reserva Wine",
      price: 3100,
      image: "/images/wine2.jpg",
      category: "Wines",
      badge: "Limited",
      inStock: false,
    },
    {
      id: 4,
      name: "Andalusian Olive Oil Gold Press",
      price: 950,
      image: "/images/olive2.jpg",
      category: "Olive Oils",
      inStock: true,
    },
    {
      id: 5,
      name: "Catalan White Wine",
      price: 1800,
      image: "/images/wine3.jpg",
      category: "Wines",
      inStock: true,
    },
    {
      id: 6,
      name: "Premium Truffle Olive Oil",
      price: 1250,
      image: "/images/olive3.jpg",
      category: "Olive Oils",
      badge: "Best Seller",
      inStock: true,
    },
    {
      id: 7,
      name: "Galician Red Wine Reserva",
      price: 2700,
      image: "/images/wine4.jpg",
      category: "Wines",
      inStock: false,
    },
    {
      id: 8,
      name: "Mediterranean Olive Oil Blend",
      price: 650,
      image: "/images/olive4.jpg",
      category: "Olive Oils",
      badge: "New",
      inStock: true,
    },
    {
      id: 9,
      name: "Basque Country White Wine",
      price: 2100,
      image: "/images/wine5.jpg",
      category: "Wines",
      inStock: true,
    },
  ];
}

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Default");
  const [page, setPage] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const itemsPerPage = 6;

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      const data = await fetchProducts();
      if (mounted) {
        setProducts(data);
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  const sortOptions = ["Default", "Price: Low to High", "Price: High to Low"];

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
  }, [products, search, category, sort]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  function handleAddToCart(product: Product) {
    // For now, just log – later connect to real cart store
    console.log("Add to cart:", product);
    alert(`Added "${product.name}" to cart.`);
  }

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

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

      {/* Skeleton loader */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 p-6 animate-pulse"
            >
              <div className="h-48 bg-bedrock-slate/10 mb-4" />
              <div className="h-4 bg-bedrock-slate/10 mb-2" />
              <div className="h-4 bg-bedrock-slate/10 mb-2 w-2/3" />
              <div className="h-6 bg-bedrock-slate/10 mb-4 w-1/2" />
              <div className="h-8 bg-bedrock-slate/10 w-1/3" />
            </div>
          ))}
        </div>
      )}

      {/* Product Grid */}
      {!loading && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-card rounded-lg border border-bedrock-slate/20 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative h-64 bg-bedrock-slate/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-bedrock-gold text-bedrock-navy text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="absolute bottom-3 right-3 bg-bedrock-red text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Out of stock
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-serif text-bedrock-navy mb-2">
                    {product.name}
                  </h2>

                  <p className="text-bedrock-slate mb-2">{product.category}</p>

                  <p className="text-bedrock-gold text-2xl font-bold mb-4">
                    ₱{product.price.toLocaleString()}
                  </p>

                  <div className="flex gap-3">
                    <button
                      className="bg-bedrock-gold text-bedrock-navy font-semibold px-4 py-2 rounded-md shadow-card hover:brightness-110 disabled:opacity-40"
                      disabled={!product.inStock}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>

                    <button
                      className="border border-bedrock-navy text-bedrock-navy font-semibold px-4 py-2 rounded-md hover:bg-bedrock-navy hover:text-white"
                      onClick={() => setQuickViewProduct(product)}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination + "Load more" (infinite scroll feel) */}
          <div className="flex flex-col items-center mt-10 gap-4">
            <div className="flex gap-4 items-center">
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

            {page < totalPages && (
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-bedrock-gold text-bedrock-navy rounded-md shadow-card hover:brightness-110"
              >
                Load more products
              </button>
            )}
          </div>
        </>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-card max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-bedrock-slate"
              onClick={() => setQuickViewProduct(null)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 h-56 bg-bedrock-slate/10">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="md:w-1/2">
                <h2 className="text-2xl font-serif text-bedrock-navy mb-2">
                  {quickViewProduct.name}
                </h2>
                <p className="text-bedrock-slate mb-2">
                  Category: {quickViewProduct.category}
                </p>
                <p className="text-bedrock-gold text-2xl font-bold mb-4">
                  ₱{quickViewProduct.price.toLocaleString()}
                </p>
                {quickViewProduct.badge && (
                  <p className="text-sm text-bedrock-navy mb-2">
                    Badge: {quickViewProduct.badge}
                  </p>
                )}
                <p className="text-sm mb-4">
                  Status:{" "}
                  {quickViewProduct.inStock ? (
                    <span className="text-green-700">In stock</span>
                  ) : (
                    <span className="text-bedrock-red">Out of stock</span>
                  )}
                </p>

                <button
                  className="bg-bedrock-gold text-bedrock-navy font-semibold px-4 py-2 rounded-md shadow-card hover:brightness-110 disabled:opacity-40"
                  disabled={!quickViewProduct.inStock}
                  onClick={() => handleAddToCart(quickViewProduct)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
