import React, { useState } from 'react';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
};

const doctorsMock: Doctor[] = [
  { id: 1, name: 'Dr. João Silva', specialty: 'Cardiologia' },
  { id: 2, name: 'Dra. Maria Oliveira', specialty: 'Dermatologia' },
  { id: 3, name: 'Dr. Ricardo Lima', specialty: 'Ortopedia' },
];

type DoctorsListProps = {
  onSelectDoctor: (doctor: Doctor) => void;
};

const DoctorsList: React.FC<DoctorsListProps> = ({ onSelectDoctor }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  const handleSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor.id);
    onSelectDoctor(doctor);
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
      <h6>Médicos</h6>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {doctorsMock.map((doctor) => (
          <li
            key={doctor.id}
            onClick={() => handleSelect(doctor)}
            style={{
              cursor: 'pointer',
              backgroundColor: selectedDoctor === doctor.id ? '#002b5c' : '#f9f9f9',
              color: selectedDoctor === doctor.id ? '#fff' : '#333',
              borderRadius: '5px',
              padding: '8px',
              marginBottom: '5px',
            }}
          >
            {doctor.name} - {doctor.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
