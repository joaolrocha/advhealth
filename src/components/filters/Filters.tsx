import React from 'react';

type FiltersProps = {
  onFilterChange: (filter: string) => void;
};

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const filters = ['Todos', 'Agendado', 'Cancelado', 'Confirmado']; // Corrigido os valores para bater com o mock

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '10px' }}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          style={{
            padding: '5px 10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#fff',
            cursor: 'pointer',
            color: 'black',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#002b5c')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
