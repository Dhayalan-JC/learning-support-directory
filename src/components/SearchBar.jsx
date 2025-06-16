export default function SearchBar({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search by name or specialization..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
