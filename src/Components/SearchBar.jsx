// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ setFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilter((prevFilter) => ({ ...prevFilter, searchQuery: query }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Tasks"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
