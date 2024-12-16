import React from 'react';

type ScheduleItem = {
  time: string;
  patient?: string; // Opcional se já estiver agendado
};

type ScheduleListProps = {
  schedules: ScheduleItem[];
  onAdd: (time: string) => void;
};

const ScheduleList: React.FC<ScheduleListProps> = ({ schedules, onAdd }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
      <h6 style={{ marginBottom: '10px' }}>Horários Disponíveis</h6>
      {schedules.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            padding: '5px 0',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>{item.time}</span>
          {item.patient ? (
            <span>{item.patient}</span>
          ) : (
            <button
              onClick={() => onAdd(item.time)}
              style={{
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              +
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;
