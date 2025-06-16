export default function SearchBar({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search by name or specialization..."
        value={value}
        className="w-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded p-2 "
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
