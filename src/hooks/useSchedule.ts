import { useState, useEffect } from 'react';
import { mockAppointments, doctors, Appointment, Doctor } from '../mock/appointmentsMock';

export const useSchedule = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [schedule, setSchedule] = useState<Appointment[]>([]);

  // Filtra os agendamentos com base no médico selecionado e data
  useEffect(() => {
    if (selectedDoctor && selectedDate) {
      const filteredSchedule = mockAppointments.filter(
        (appointment) =>
          appointment.doctorId === selectedDoctor.id && appointment.date === selectedDate
      );
      setSchedule(filteredSchedule);
    } else {
      setSchedule([]); // Se nenhum médico ou data for selecionado
    }
  }, [selectedDoctor, selectedDate]);

  const handleDoctorSelect = (doctorName: string) => {
    const doctor = doctors.find((d) => d.name === doctorName) || null;
    setSelectedDoctor(doctor);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return { doctors, selectedDoctor, selectedDate, schedule, handleDoctorSelect, handleDateSelect };
};
