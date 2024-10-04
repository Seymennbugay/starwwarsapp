import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    fetch(`https://swapi.dev/api/starships/?search=${query}`)
      .then(res => res.json())
      .then(data => {
        onSearch(data.results);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Yıldız gemisi adı veya modeli"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Ara</button>
    </div>
  );
};

export default SearchBar;
