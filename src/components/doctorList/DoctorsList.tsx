import React from 'react';
import { Doctor } from '../../mock/appointmentsMock';

type DoctorsListProps = {
  doctors: Doctor[];
  onSelectDoctor: (doctorName: string) => void;
  selectedDoctor: Doctor | null;
};

const DoctorsList: React.FC<DoctorsListProps> = ({ doctors, onSelectDoctor, selectedDoctor }) => {
  return (
    <div>
      <h5 style={{ marginBottom: '10px', textAlign: 'center', color: '#002b5c' }}>
        Lista de Médicos
      </h5>
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          style={{
            padding: '10px',
            marginBottom: '8px',
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor: selectedDoctor?.id === doctor.id ? '#002b5c' : '#f8f9fa',
            color: selectedDoctor?.id === doctor.id ? '#fff' : '#333',
            transition: 'background-color 0.3s ease',
          }}
          onClick={() => onSelectDoctor(doctor.name)}
        >
          <strong>{doctor.name}</strong>
          <p style={{ margin: 0, color: selectedDoctor?.id === doctor.id ? '#ddd' : '#666' }}>
            {doctor.specialty}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
