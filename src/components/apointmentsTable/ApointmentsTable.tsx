import React from 'react';
import './apointmentsTable.css';

type Appointment = {
  date: string;
  time: string;
  patient: string;
  modality: string;
  doctor: string;
  status: string;
  value: string;
};

type AppointmentsTableProps = {
  data: Appointment[];
  onEdit: (id: number) => void;
  onView: (id: number) => void;
};

const AppointmentsTable: React.FC<AppointmentsTableProps> = ({ data, onEdit, onView }) => {
  return (
    <div className="table-container">
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Hora</th>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Modalidade</th>
            <th>Status</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.patient}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.modality}</td>
              <td>{appointment.status}</td>
              <td>{appointment.value}</td>
              <td>
                <button
                  onClick={() => onView(index)}
                  style={{
                    marginRight: '5px',
                    cursor: 'pointer',
                    padding: '5px 8px',
                    border: 'none',
                    backgroundColor: '#0d6efd',
                    color: '#fff',
                    borderRadius: '4px',
                  }}
                >
                  Visualizar
                </button>
                <button
                  onClick={() => onEdit(index)}
                  style={{
                    cursor: 'pointer',
                    padding: '5px 8px',
                    border: 'none',
                    backgroundColor: '#6c757d',
                    color: '#fff',
                    borderRadius: '4px',
                  }}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={8} style={{ textAlign: 'center' }}>
                Nenhum agendamento encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
