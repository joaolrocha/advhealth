import React from 'react';

type FiltersProps = {
  onFilterChange: (filter: string) => void;
};

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const filters = ['Todos', 'Agendados', 'Cancelados', 'Confirmados'];

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
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
