import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CalendarComponent from '../../components/calendar/CalendarComponent';
import DoctorsList from '../../components/doctorList/DoctorsList';
import ScheduleList from '../../components/scheduleList/SchedulesList';
import LayoutDashboard from '../../layouts/LayoutDashboard';

type ScheduleItem = {
  time: string;
  patient?: string;
};

const Schedule: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [schedules, setSchedules] = useState<ScheduleItem[]>([
    { time: '08:00' },
    { time: '08:30' },
    { time: '09:00' },
    { time: '09:30' },
    { time: '10:00' },
    { time: '10:30' },
  ]);

  const handleAddAppointment = (time: string) => {
    const patientName = prompt('Digite o nome do paciente:');
    if (patientName) {
      setSchedules((prev) =>
        prev.map((item) => (item.time === time ? { ...item, patient: patientName } : item))
      );
    }
  };

  return (
    <LayoutDashboard>
      <Container fluid style={{ display: 'flex', height: '100vh', padding: '0', gap: '1rem' }}>
        {/* Coluna ESQUERDA: Lista de Médicos e Calendário */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '30%',
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          {/* Lista de Médicos */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px', backgroundColor: '#fff', borderRadius: '8px' }}>
            <DoctorsList onSelectDoctor={(doctor) => setSelectedDoctor(doctor.name)} />
          </div>

          {/* Calendário */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px', backgroundColor: '#fff', borderRadius: '8px' }}>
            <CalendarComponent onDateSelect={(date) => console.log('Data selecionada:', date)} />
          </div>
        </div>

        {/* Coluna DIREITA: Agenda do Médico */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            overflowY: 'auto',
          }}
        >
          <h5 style={{ marginBottom: '1rem', color: '#002b5c' }}>
            Agenda do Médico: <strong>{selectedDoctor || 'Selecione um médico'}</strong>
          </h5>
          <ScheduleList schedules={schedules} onAdd={handleAddAppointment} />
        </div>
      </Container>
    </LayoutDashboard>
  );
};

export default Schedule;
