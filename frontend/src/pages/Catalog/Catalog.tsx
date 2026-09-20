import { useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  sku: string;
  name: string;
  price: number;
  image: string;
  category: string; // Red Wine, White Wine, Sparkling Wine, 100% Picual, Arbequina, Coupage
  region: string;   // Rioja, Catalonia, Andalusia, Valencia, etc.
  vintage?: number; // year for wines
  acidity?: number; // % for olive oils
  badge?: "New" | "Best Seller" | "Limited";
  inStock: boolean;
};

async function fetchProducts(): Promise<Product[]> {
  // 🔹 Backend integration placeholder:
  // return fetch("/api/products").then((res) => res.json());

  // For now, mock data:
  return [
    // WINES
    {
      id: 1,
      sku: "W-RW-001",
      name: "Valencia Premium Red Wine",
      price: 2450,
      image: "/images/wine1.jpg",
      category: "Red Wine",
      region: "Valencia",
      vintage: 2020,
      badge: "Best Seller",
      inStock: true,
    },
    {
      id: 2,
      sku: "W-WW-002",
      name: "Catalan White Wine",
      price: 1800,
      image: "/images/wine3.jpg",
      category: "White Wine",
      region: "Catalonia",
      vintage: 2019,
      inStock: true,
    },
    {
      id: 3,
      sku: "W-SW-003",
      name: "Rioja Sparkling Wine",
      price: 3100,
      image: "/images/wine2.jpg",
      category: "Sparkling Wine",
      region: "Rioja",
      vintage: 2018,
      badge: "Limited",
      inStock: false,
    },

    // OLIVE OILS
    {
      id: 4,
      sku: "O-PIC-004",
      name: "100% Picual Extra Virgin Olive Oil",
      price: 950,
      image: "/images/olive1.jpg",
      category: "100% Picual",
      region: "Andalusia",
      acidity: 0.2,
      badge: "New",
      inStock: true,
    },
    {
      id: 5,
      sku: "O-ARB-005",
      name: "Arbequina Olive Oil Gold Press",
      price: 780,
      image: "/images/olive2.jpg",
      category: "Arbequina",
      region: "Catalonia",
      acidity: 0.3,
      inStock: true,
    },
    {
      id: 6,
      sku: "O-COU-006",
      name: "Coupage Mediterranean Olive Oil",
      price: 1250,
      image: "/images/olive3.jpg",
      category: "Coupage",
      region: "Valencia",
      acidity: 0.4,
      badge: "Best Seller",
      inStock: true,
    },
  ];
}

const CATEGORY_GROUPS = [
  {
    group: "Wines",
    items: ["Red Wine", "White Wine", "Sparkling Wine"],
  },
  {
    group: "Olive Oils",
    items: ["100% Picual", "Arbequina", "Coupage"],
  },
];

const BADGE_OPTIONS: Array<Product["badge"]> = ["New", "Best Seller", "Limited"];
const REGION_OPTIONS = ["Rioja", "Catalonia", "Andalusia", "Valencia"];
const VINTAGE_OPTIONS = [2018, 2019, 2020];
const ACIDITY_OPTIONS = [0.2, 0.3, 0.4];

const SORT_OPTIONS = ["Default", "Price: Low to High", "Price: High to Low"];

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Default");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // Sidebar filters (multi‑select)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<Product["badge"][]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedVintages, setSelectedVintages] = useState<number[]>([]);
  const [selectedAcidity, setSelectedAcidity] = useState<number[]>([]);
  const [minPrice, setMinPrice] = useState<number | "">(0);
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

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

  function toggleSelection<T>(value: T, list: T[], setList: (v: T[]) => void) {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  }

  function clearFilters() {
    setSelectedCategories([]);
    setSelectedBadges([]);
    setSelectedRegions([]);
    setSelectedVintages([]);
    setSelectedAcidity([]);
    setMinPrice(0);
    setMaxPrice("");
    setPage(1);
  }

  const filteredProducts = useMemo(() => {
    let result = products;

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedBadges.length > 0) {
      result = result.filter((p) => p.badge && selectedBadges.includes(p.badge));
    }

    if (selectedRegions.length > 0) {
      result = result.filter((p) => selectedRegions.includes(p.region));
    }

    if (selectedVintages.length > 0) {
      result = result.filter(
        (p) => p.vintage && selectedVintages.includes(p.vintage)
      );
    }

    if (selectedAcidity.length > 0) {
      result = result.filter(
        (p) => p.acidity && selectedAcidity.includes(p.acidity)
      );
    }

    if (minPrice !== "" && minPrice > 0) {
      result = result.filter((p) => p.price >= minPrice);
    }

    if (maxPrice !== "" && maxPrice > 0) {
      result = result.filter((p) => p.price <= maxPrice);
    }

    if (sort === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [
    products,
    search,
    selectedCategories,
    selectedBadges,
    selectedRegions,
    selectedVintages,
    selectedAcidity,
    minPrice,
    maxPrice,
    sort,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  function handleAddToCart(product: Product) {
    alert(`Added "${product.name}" (SKU: ${product.sku}) to cart.`);
  }

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <div className="min-h-screen bg-bedrock-white px-6 py-10 flex gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/4 bg-white border border-bedrock-slate/20 rounded-lg shadow-card p-4">
        <h2 className="text-xl font-serif text-bedrock-navy mb-4">
          Filters
        </h2>

        {/* Category (hierarchical, multi‑select) */}
        <div className="mb-4">
          <p className="font-semibold text-bedrock-slate mb-2">Categories</p>
          {CATEGORY_GROUPS.map((group) => (
            <div key={group.group} className="mb-2">
              <p className="text-sm font-semibold text-bedrock-navy">
                {group.group}
              </p>
              {group.items.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-sm text-bedrock-slate"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(item)}
                    onChange={() =>
                      toggleSelection(item, selectedCategories, setSelectedCategories)
                    }
                  />
                  {item}
                </label>
              ))}
            </div>
          ))}
        </div>

        {/* Price range */}
        <div className="mb-4">
          <p className="font-semibold text-bedrock-slate mb-2">Price range</p>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              className="border border-bedrock-slate/30 rounded-md px-2 py-1 w-20"
              placeholder="Min"
              value={minPrice === "" ? "" : minPrice}
              onChange={(e) =>
                setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
            <span>–</span>
            <input
              type="number"
              className="border border-bedrock-slate/30 rounded-md px-2 py-1 w-20"
              placeholder="Max"
              value={maxPrice === "" ? "" : maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </div>
        </div>

        {/* Badges */}
        <div className="mb-4">
          <p className="font-semibold text-bedrock-slate mb-2">Badges</p>
          {BADGE_OPTIONS.map((badge) => (
            <label
              key={badge}
              className="flex items-center gap-2 text-sm text-bedrock-slate"
            >
              <input
                type="checkbox"
                checked={selectedBadges.includes(badge)}
                onChange={() =>
                  toggleSelection(badge, selectedBadges, setSelectedBadges)
                }
              />
              {badge}
            </label>
          ))}
        </div>

        {/* Regions */}
        <div className="mb-4">
          <p className="font-semibold text-bedrock-slate mb-2">Regions</p>
          {REGION_OPTIONS.map((region) => (
            <label
              key={region}
              className="flex items-center gap-2 text-sm text-bedrock-slate"
            >
              <input
                type="checkbox"
                checked={selectedRegions.includes(region)}
                onChange={() =>
                  toggleSelection(region, selectedRegions, setSelectedRegions)
                }
              />
              {region}
            </label>
          ))}
        </div>

        {/* Vintages */}
        <div className="mb-4">
          <p className="font-semibold text-bedrock-slate mb-2">Vintage (year)</p>
          {VINTAGE_OPTIONS.map((year) => (
            <label
              key={year}
              className="flex items-center gap-2 text-sm text-bedrock-slate"
            >
              <input
                type="checkbox"
                checked={selectedVintages.includes(year)}
                onChange={() =>
                  toggleSelection(year, selectedVintages, setSelectedVintages)
                }
              />
              {year}
            </label>
          ))}
        </div>

        {/* Acidity */}
        <div className="mb-4">
          <p className="font-semibold text-bedrock-slate mb-2">
            Olive oil acidity (%)
          </p>
          {ACIDITY_OPTIONS.map((acid) => (
            <label
              key={acid}
              className="flex items-center gap-2 text-sm text-bedrock-slate"
            >
              <input
                type="checkbox"
                checked={selectedAcidity.includes(acid)}
                onChange={() =>
                  toggleSelection(acid, selectedAcidity, setSelectedAcidity)
                }
              />
              {acid}%
            </label>
          ))}
        </div>

        {/* Clear filters */}
        <button
          className="mt-2 w-full bg-bedrock-navy text-white rounded-md px-3 py-2 text-sm"
          onClick={clearFilters}
        >
          Clear all filters
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1">
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
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

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
                    <h2 className="text-xl font-serif text-bedrock-navy mb-1">
                      {product.name}
                    </h2>

                    <p className="text-sm text-bedrock-slate/70 mb-1">
                      SKU: {product.sku}
                    </p>

                    <p className="text-sm text-bedrock-slate/70 mb-1">
                      Region: {product.region}
                    </p>

                    {product.vintage && (
                      <p className="text-sm text-bedrock-slate/70 mb-1">
                        Vintage: {product.vintage}
                      </p>
                    )}

                    {product.acidity && (
                      <p className="text-sm text-bedrock-slate/70 mb-1">
                        Acidity: {product.acidity}%
                      </p>
                    )}

                    <p className="text-bedrock-slate mb-2">
                      Category: {product.category}
                    </p>

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

                  <p className="text-sm mb-1 text-bedrock-slate">
                    SKU: {quickViewProduct.sku}
                  </p>
                  <p className="text-sm mb-1 text-bedrock-slate">
                    Region: {quickViewProduct.region}
                  </p>
                  {quickViewProduct.vintage && (
                    <p className="text-sm mb-1 text-bedrock-slate">
                      Vintage: {quickViewProduct.vintage}
                    </p>
                  )}
                  {quickViewProduct.acidity && (
                    <p className="text-sm mb-1 text-bedrock-slate">
                      Acidity: {quickViewProduct.acidity}%
                    </p>
                  )}

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
      </main>
    </div>
  );
}
