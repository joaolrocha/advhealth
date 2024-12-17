import React, { useState } from 'react';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: 1,
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          marginRight: '10px',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '10px 15px',
          backgroundColor: '#0f172a',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
