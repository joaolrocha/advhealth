import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CalendarComponent from '../../components/calendar/CalendarComponent';
import DoctorsList from '../../components/doctorList/DoctorsList';
import ScheduleList from '../../components/scheduleList/SchedulesList';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import { doctors, mockAppointments, Doctor, Appointment } from '../../mock/appointmentsMock';
import './schedules.css';

const Schedule: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('2024-12-17');
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>(mockAppointments);

  // Filtra os compromissos por médico e data
  const filterAppointments = (doctor: Doctor | null, date: string) => {
    if (doctor && date) {
      const filtered = mockAppointments.filter(
        (appointment) => appointment.doctorId === doctor.id && appointment.date === date
      );
      setFilteredAppointments(filtered);
    } else {
      setFilteredAppointments([]);
    }
  };

  // Seleciona médico e filtra compromissos
  const handleDoctorSelect = (doctorName: string) => {
    const doctor = doctors.find((d) => d.name === doctorName) || null;
    setSelectedDoctor(doctor);
    filterAppointments(doctor, selectedDate);
  };

  // Seleciona data e filtra compromissos
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    filterAppointments(selectedDoctor, date);
  };

  // Adiciona novo agendamento
  const handleAddAppointment = (time: string) => {
    const patientName = prompt('Digite o nome do paciente:');
    const modality = prompt('Digite a modalidade do exame: (Ex: Raio-X, Ultrassom)');
    if (patientName && modality && selectedDoctor) {
      const newAppointment: Appointment = {
        date: selectedDate,
        time,
        patient: patientName,
        modality,
        doctorId: selectedDoctor.id,
      };
      mockAppointments.push(newAppointment); // Adiciona ao mock temporário
      filterAppointments(selectedDoctor, selectedDate); // Atualiza a lista
      alert('Novo agendamento cadastrado com sucesso!');
    }
  };

  return (
    <LayoutDashboard>
      <Container fluid className="schedule-container">
        {/* Coluna ESQUERDA: Lista de Médicos e Calendário */}
        <div className="schedule-left">
          <div className="schedule-box">
            <DoctorsList
              doctors={doctors}
              onSelectDoctor={handleDoctorSelect}
              selectedDoctor={selectedDoctor}
            />
          </div>
          <div className="schedule-box">
            <CalendarComponent onDateSelect={handleDateSelect} />
          </div>
        </div>

        {/* Coluna DIREITA: Agenda do Médico */}
        <div className="schedule-right">
          <h5 className="schedule-title">
            Agenda do Médico:{' '}
            <strong>
              {selectedDoctor
                ? `${selectedDoctor.name} (${selectedDoctor.specialty})`
                : 'Selecione um médico'}
            </strong>
          </h5>
          <h6 className="schedule-title">
            Data: {selectedDate ? selectedDate : 'Selecione uma data'}
          </h6>
          <ScheduleList schedules={filteredAppointments} onAdd={handleAddAppointment} />
        </div>
      </Container>
    </LayoutDashboard>
  );
};

export default Schedule;
