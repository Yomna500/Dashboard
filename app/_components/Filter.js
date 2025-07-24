export default function FilterInput({ filter, setFilter, setCurrentPage }) {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Filter by name..."
        className="border border-gray-300 rounded px-4 py-2 w-1/2"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}
