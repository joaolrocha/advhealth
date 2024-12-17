import React from 'react';
import { Appointment } from '../../mock/appointmentsMock';

type ScheduleListProps = {
  schedules: Appointment[];
  onAdd: (time: string) => void;
};

const ScheduleList: React.FC<ScheduleListProps> = ({ schedules, onAdd }) => {
  const availableTimes = Array.from({ length: 10 }, (_, i) => `${7 + i}:00`);

  return (
    <div>
      <h6 style={{ marginBottom: '10px', textAlign: 'center' }}>Horários Disponíveis</h6>
      {availableTimes.map((time, index) => {
        const scheduled = schedules.find((a) => a.time === time);
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span style={{ fontWeight: 'bold' }}>{time}</span>
            {scheduled ? (
              <span>{scheduled.patient} | {scheduled.modality}</span>
            ) : (
              <button
                onClick={() => onAdd(time)}
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
        );
      })}
    </div>
  );
};

export default ScheduleList;
