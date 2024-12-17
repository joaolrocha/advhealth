import React from 'react';

// Definição do tipo de compromisso
type Appointment = {
  time: string;
  patient: string;
};

// Props do componente AppointmentsList
type AppointmentsListProps = {
  appointments: Appointment[]; // Lista de compromissos para o dia selecionado
  selectedDate: string | null; // Data selecionada no calendário
};

// Componente funcional com tipagem correta
const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments, selectedDate }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '100%' }}>
      <h5 style={{ textAlign: 'center', marginBottom: '10px' }}>
        Compromissos - {selectedDate ? `Dia ${selectedDate}` : 'Selecione uma data'}
      </h5>

      {appointments.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {appointments.map((appointment, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              <strong>{appointment.time}</strong> - {appointment.patient}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center' }}>Nenhum compromisso para esta data.</p>
      )}
    </div>
  );
};

export default AppointmentsList;

