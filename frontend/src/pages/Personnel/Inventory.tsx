export default function PersonnelInventory() {
  return (
    <>
      <h1>Inventory</h1>
      <button onClick={() => window.open("/personnel/inventory/print")}>
        Print Inventory
      </button>
    </>
  );
}
