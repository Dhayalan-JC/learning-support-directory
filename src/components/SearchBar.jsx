export default function SearchBar({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search by name or specialization..."
        value={value}
        className="w-75 border border-gray-200 rounded p-2"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
