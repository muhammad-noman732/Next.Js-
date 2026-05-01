import SearchBar from "@/components/SearchBar";
import React from "react";

async function SearchPage() {
  return (
    <div>
      <div>
        <h1>Search Posts</h1>
        <p style={{ color: "gray", marginBottom: 24 }}>
          Search is client-side — queries happen in your browser as you type
        </p>
        {/* SearchBar is a CC — it gets the 'use client' boundary */}
        {/* But the rest of this page stays SC */}
        <SearchBar />
      </div>
    </div>
  );
}

export default SearchPage;
