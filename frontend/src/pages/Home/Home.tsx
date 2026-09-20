export default function Home() {
  return (
    <div className="min-h-screen bg-bedrock-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-bedrock-slate/20">
        <img
          src="/images/hero-trading.jpg"
          alt="Trading Concept"
          className="w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <img
            src="/images/logo.png"
            alt="Bedrock CGT Logo"
            className="h-32 w-32 mb-6"
          />

          <h1 className="text-4xl font-serif text-white mb-4">
            Bedrock Consumer Goods Trading
          </h1>

          <p className="text-xl text-bedrock-gold max-w-2xl">
            Delivering premium wines and olive oils from Spain to the world.
            Quality, authenticity, and excellence in every bottle.
          </p>
        </div>
      </section>

      {/* Trading Concept Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif text-bedrock-navy mb-6 text-center">
          Our Trading Concept
        </h2>

        <p className="text-bedrock-slate text-lg leading-relaxed text-center mb-10">
          Bedrock CGT specializes in sourcing, distributing, and delivering
          high‑quality Spanish wines and olive oils. Our mission is to bridge
          the gap between authentic Mediterranean producers and global
          consumers seeking premium, trustworthy products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white shadow-card rounded-lg p-6 text-center">
            <img
              src="/images/wine-concept.jpg"
              alt="Wine Concept"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-serif text-bedrock-navy mb-2">
              Premium Wines
            </h3>
            <p className="text-bedrock-slate">
              Curated selections from Spain’s finest wine regions.
            </p>
          </div>

          <div className="bg-white shadow-card rounded-lg p-6 text-center">
            <img
              src="/images/olive-concept.jpg"
              alt="Olive Oil Concept"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-serif text-bedrock-navy mb-2">
              Authentic Olive Oils
            </h3>
            <p className="text-bedrock-slate">
              Pure, cold‑pressed oils crafted with tradition and care.
            </p>
          </div>

          <div className="bg-white shadow-card rounded-lg p-6 text-center">
            <img
              src="/images/trade-concept.jpg"
              alt="Trading Concept"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-serif text-bedrock-navy mb-2">
              Global Trading
            </h3>
            <p className="text-bedrock-slate">
              Efficient logistics and reliable distribution worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
