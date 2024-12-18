import React, { useEffect, useState } from 'react';

type CalendarComponentProps = {
  onDateSelect: (date: string) => void; // Função chamada ao clicar em uma data
};

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onDateSelect }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(today.getDate().toString());

  // Chama a função onDateSelect com a data de hoje ao carregar o componente
  useEffect(() => {
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    onDateSelect(formattedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleDateClick = (day: number): void => {
    const formattedDate = `${currentYear}-${(currentMonth + 1)
      .toString()
      .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    setSelectedDate(day.toString());
    onDateSelect(formattedDate); // Notifica o componente pai com a data formatada
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
      {/* Header do Calendário */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <button
          onClick={handlePrevMonth}
          style={{
            border: 'none',
            background: '#1E293B',
            color: '#fff',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          &lt;
        </button>
        <h5 style={{ margin: 0 }}>
          {months[currentMonth]} {currentYear}
        </h5>
        <button
          onClick={handleNextMonth}
          style={{
            border: 'none',
            background: '#1E293B',
            color: '#fff',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          &gt;
        </button>
      </div>

      {/* Corpo do Calendário */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px' }}>
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              style={{
                border: 'none',
                borderRadius: '5px',
                backgroundColor: selectedDate === day.toString() ? '#1E293B' : '#e0e0e0',
                color: selectedDate === day.toString() ? '#fff' : '#333',
                padding: '8px',
                cursor: 'pointer',
                fontWeight: selectedDate === day.toString() ? 'bold' : 'normal',
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
