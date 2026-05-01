"use client";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function SearchBar() {
  const [query, setQuery] = useState("");

  // SWR key changes when query changes → triggers new fetch
  // SWR handles: loading state, error state, deduplication, caching
  // When query is empty, SWR key is null → no fetch (disabled)

  const { error, isLoading, data } = useSWR(
    query.length >= 2 ? `/api/search?q=${query}` : null,
    fetcher,
  );
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 16px",
          fontSize: 16,
          border: "1px solid #ddd",
          borderRadius: 8,
          marginBottom: 16,
          boxSizing: "border-box",
        }}
      />

      {/* Four states to handle in client-side data fetching */}
      {query.length < 2 && (
        <p style={{ color: "gray" }}>Type at least 2 characters to search</p>
      )}

      {isLoading && <p style={{ color: "gray" }}>Searching...</p>}

      {error && <p style={{ color: "red" }}>Failed to search. Try again.</p>}

      {data && data.length === 0 && (
        <p style={{ color: "gray" }}>No posts found for {query}</p>
      )}

      {data && data.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.map(
            (post: { id: number; title: string; description: string }) => (
              <li
                key={post.id}
                style={{
                  padding: "10px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <strong>{post.title}</strong>
                <p style={{ margin: "4px 0 0", fontSize: 14, color: "gray" }}>
                  {post.description}
                </p>
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
