import React, { useState, useEffect } from 'react';

type CalendarComponentProps = {
  onDateSelect: (date: string) => void; // Função chamada ao clicar em uma data
};

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onDateSelect }) => {
  const today = new Date().getDate().toString(); // Pega o dia atual como string
  const [selectedDate, setSelectedDate] = useState<string | null>(today);

  // Chama a função onDateSelect com a data de hoje ao carregar o componente
  useEffect(() => {
    onDateSelect(today);
  }, [onDateSelect, today]);

  const handleDateClick = (date: string): void => {
    setSelectedDate(date);
    onDateSelect(date); // Notifica o componente pai
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
      <h5 style={{ textAlign: 'center', marginBottom: '10px' }}>Fevereiro</h5>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px' }}>
        {Array.from({ length: 28 }, (_, i) => {
          const day = (i + 1).toString();
          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              style={{
                border: 'none',
                borderRadius: '5px',
                backgroundColor: selectedDate === day ? '#002b5c' : '#e0e0e0',
                color: selectedDate === day ? '#fff' : '#333',
                padding: '8px',
                cursor: 'pointer',
                fontWeight: selectedDate === day ? 'bold' : 'normal',
                transition: 'background-color 0.3s ease',
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarComponent;
