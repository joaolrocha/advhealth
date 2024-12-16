import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CalendarComponent from '../../components/calendar/CalendarComponent';
import DoctorsList from '../../components/doctorList/DoctorsList';
import ScheduleList from '../../components/scheduleList/SchedulesList';

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
    <Container fluid style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Row>
        {/* Sidebar com Médicos e Calendário */}
        <Col md={4}>
          <DoctorsList onSelectDoctor={(doctor) => setSelectedDoctor(doctor.name)} />
          <CalendarComponent onDateSelect={(date) => console.log('Data selecionada:', date)} />
        </Col>

        {/* Horários Disponíveis */}
        <Col md={8}>
          <h5>
            Agenda do Médico: <strong>{selectedDoctor || 'Selecione um médico'}</strong>
          </h5>
          <ScheduleList schedules={schedules} onAdd={handleAddAppointment} />
        </Col>
      </Row>
    </Container>
  );
};

export default Schedule;
