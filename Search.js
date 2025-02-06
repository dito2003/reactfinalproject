
import React from 'react';

const Search = ({ search, handleSearch }) => {
  return (
    <input
      type="text"
      value={search}
      onChange={handleSearch}
      placeholder="Search by name"
    />
  );
};

export default Search;
