import { Link } from "react-router-dom";

export default function ProviderCard({ provider }) {
  return (
    <>
      <Link
        to={`/providers/${provider.id}`}
        className="p-4 flex flex-col items-center bg-white border border-gray-200"
      >
        <h2 className="text-lg font-semibold">{provider.name}</h2>
        <p>{provider.specialization}</p>
        <p>{provider.location}</p>
        <p>⭐ {provider.rating}</p>
      </Link>
      </>
  );
}
