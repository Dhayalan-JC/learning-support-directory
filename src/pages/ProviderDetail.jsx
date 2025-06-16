import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProviderById } from "../utils/api/fetchProviders";

export default function ProviderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProviderById(id).then(setProvider).catch(setError);
  }, [id]);

  if (error) return <p className="text-red-500">Provider not found.</p>;
  if (!provider) return <p>Loading...</p>;

  return (
    <div className="p-4 container mx-auto ">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 cursor-pointer">
        ← Back to List
      </button>
      <h1 className="text-2xl font-bold">{provider.name}</h1>
      <p className="italic">{provider.specialization}</p>
      <p>{provider.location}</p>
      <p>⭐ {provider.rating}</p>
      <p className="mt-2">{provider.longDescription}</p>
      <p className="mt-2">📧 {provider.contactEmail}</p>
      <p>📞 {provider.phoneNumber}</p>
    </div>
  );
}
