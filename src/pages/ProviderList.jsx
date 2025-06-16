import { useEffect, useState } from "react";
import { fetchProviders } from "../utils/api/fetchProviders";
import ProviderCard from "../components/ProviderCard";
import SearchBar from "../components/SearchBar";

export default function ProviderList() {
  const [providers, setProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProviders().then(setProviders);
  }, []);

  const filtered = providers.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 d-flex flex-col items-center grid">
      <div className="text-center">
        <h1 className="font-sans text-xl font-bold mb-4">
          Learning Support Providers
        </h1>
        <div className="text-center p-4">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            className="mb-3"
          />
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 searchColumn">
        {filtered.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} className="col-span-1 p-2" />
        ))}
      </div>
    </div>
  );
}
