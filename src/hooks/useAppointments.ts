import { useState } from 'react';
import { mockAppointments } from '../mock/appointmentsMock';

export const useAppointments = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const loadAppointments = (date: string) => {
    setSelectedDate(date); // Seta a data selecionada
  };

  const appointments = selectedDate
    ? mockAppointments.filter((appointment) => appointment.date === selectedDate)
    : [];

  return { selectedDate, appointments, loadAppointments };
};
