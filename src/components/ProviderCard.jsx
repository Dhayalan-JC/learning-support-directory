import { Link } from "react-router-dom";

export default function ProviderCard({ provider }) {
  return (
    <>
      <Link
        to={`/providers/${provider.id}`}
        className="border border-gray-200 p-2"
      >
        <h2 className="text-lg font-semibold">{provider.name}</h2>
        <p>{provider.specialization}</p>
        <p>{provider.location}</p>
        <p>⭐ {provider.rating}</p>
      </Link>
      </>
  );
}
