"use client";

import { useMemo, useState } from "react";

type ServicesListFromDataProps = {
  services: string[];
};

function ServicesListFromData({ services }: ServicesListFromDataProps) {
  const [query, setQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const mappedServices = useMemo(() => {
    const filtered = services.filter((service) =>
      service.toLowerCase().includes(query.trim().toLowerCase())
    );

    return [...filtered].sort((a, b) =>
      sortAsc ? a.localeCompare(b) : b.localeCompare(a)
    );
  }, [services, query, sortAsc]);

  return (
    <>
      <h2 className="text-xl font-semibold mt-8">
        Client-mapped list (data prop)
      </h2>
      <div className="bg-white/70 p-3 rounded mt-2 mb-3 text-sm">
        <p>Pattern: raw data is passed to client, mapping happens in browser.</p>
        <p>Client state active: yes (filter and sort controls below)</p>
        <p>Total items from server prop: {services.length}</p>
        <p>Visible items after client state: {mappedServices.length}</p>
        <div className="mt-2 flex gap-2">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="px-2 py-1 rounded border border-gray-400"
            placeholder="Filter services"
          />
          <button
            type="button"
            className="px-3 py-1 rounded bg-black text-white"
            onClick={() => setSortAsc((prev) => !prev)}
          >
            Sort: {sortAsc ? "A-Z" : "Z-A"}
          </button>
        </div>
      </div>
      <ul>
        {mappedServices.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </>
  );
}

export default ServicesListFromData;
