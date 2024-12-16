import React from 'react';

type Appointment = {
  id: number;
  patient: string;
  doctor: string;
  date: string;
  time: string;
  status: string; // Agendado, Cancelado, Confirmado
  value: string;
};

type AppointmentsTableProps = {
  data: Appointment[];
  onEdit: (id: number) => void;
  onView: (id: number) => void;
};

const AppointmentsTable: React.FC<AppointmentsTableProps> = ({ data, onEdit, onView }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '10px' }}>Paciente</th>
          <th style={{ border: '1px solid #ddd', padding: '10px' }}>Médico</th>
          <th style={{ border: '1px solid #ddd', padding: '10px' }}>Data</th>
          <th style={{ border: '1px solid #ddd', padding: '10px' }}>Hora</th>
          <th style={{ border: '1px solid #ddd', padding: '10px' }}>Status</th>
          <th style={{ border: '1px solid #ddd', padding: '10px' }}>Valor</th>
          <th style={{ border: '1px solid #ddd', padding: '10px' }}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.patient}</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.doctor}</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.date}</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.time}</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.status}</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.value}</td>
            <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
              <button onClick={() => onEdit(item.id)}>✏️</button>
              <button onClick={() => onView(item.id)} style={{ marginLeft: '10px' }}>
                🔍
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentsTable;
