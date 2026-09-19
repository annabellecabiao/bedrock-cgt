import { Outlet } from "react-router-dom";

export default function PersonnelLayout() {
  return (
    <div className="min-h-screen flex bg-bedrock-white">

      {/* Sidebar */}
      <aside className="w-64 bg-bedrock-navy text-white flex flex-col py-8 px-6">
        <h2 className="text-2xl font-serif mb-8 text-bedrock-gold">
          Personnel Panel
        </h2>

        <nav className="flex flex-col gap-4">
          <a className="hover:text-bedrock-gold font-medium" href="/personnel/inventory">
            Inventory
          </a>
          <a className="hover:text-bedrock-gold font-medium" href="/personnel/print">
            Printable Inventory
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-10">
        <Outlet />
      </main>
    </div>
  );
}

