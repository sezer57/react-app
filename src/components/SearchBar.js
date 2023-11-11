import React, { useState, useEffect } from "react";

function SearchBar({ searchProducts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    searchProducts(searchTerm);
  };

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      searchProducts(searchTerm);
    }, 300);

    return () => {
      clearTimeout(delayedSearch);
    };
  }, [searchTerm, searchProducts]);

  return (
    <div className="mb-4">
      <input
        type="text"
        className="border rounded-l px-4 py-2 focus:outline-none focus:ring  "
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
