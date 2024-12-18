import React from 'react';
import { doctors } from '../../mock/appointmentsMock';

type Appointment = {
  date: string;
  time: string;
  patient: string;
  modality: string;
  doctorId: number;
};

type AppointmentsListProps = {
  appointments: Appointment[];
  selectedDate: string | null;
};

// Função para formatar a data no formato DD/MM/YYYY
const formatDate = (date: string): string => {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};

// Busca o nome do médico pelo ID
const getDoctorName = (doctorId: number): string => {
  const doctor = doctors.find((doc) => doc.id === doctorId);
  return doctor ? doctor.name : 'Médico não encontrado';
};

const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments, selectedDate }) => {
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.date === selectedDate
  );

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxHeight: '76%',
        overflow: 'auto'
      }}
    >
      <h5
        style={{
          textAlign: 'center',
          marginBottom: '15px',
          color: '#002b5c',
          fontWeight: 'bold',
        }}
      >
        Compromissos - {selectedDate ? formatDate(selectedDate) : 'Selecione uma data'}
      </h5>

      {filteredAppointments.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {filteredAppointments.map((appointment, index) => (
            <li
              key={index}
              style={{
                marginBottom: '12px',
                paddingBottom: '12px',
                borderBottom: '1px solid #eee',
              }}
            >
              <div>
                <strong>{appointment.time}</strong> - {appointment.patient}
                <br />
                <span style={{ fontSize: '14px', color: '#555' }}>
                  <em>Modalidade:</em> {appointment.modality} |{' '}
                  <em>Médico:</em> {getDoctorName(appointment.doctorId)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>
          Nenhum compromisso para esta data.
        </p>
      )}
    </div>
  );
};

export default AppointmentsList;
