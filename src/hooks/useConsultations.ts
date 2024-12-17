import { useState, useEffect } from 'react';
import { mockAppointments, doctors } from '../mock/appointmentsMock';

type EnrichedAppointment = {
  date: string;
  time: string;
  patient: string;
  modality: string;
  doctor: string;
  status: string;
  value: string;
};

const statuses = ['Agendado', 'Cancelado', 'Confirmado'];
const values = ['R$ 200', 'R$ 300', 'R$ 150'];

const useConsultations = () => {
  const [appointments, setAppointments] = useState<EnrichedAppointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<EnrichedAppointment[]>([]);

  // Enriquecendo os dados com status e valores
  useEffect(() => {
    const enrichedData = mockAppointments.map((appointment) => {
      const doctor = doctors.find((d) => d.id === appointment.doctorId)?.name || 'Desconhecido';
      return {
        ...appointment,
        doctor,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        value: values[Math.floor(Math.random() * values.length)],
      };
    });
    setAppointments(enrichedData);
    setFilteredAppointments(enrichedData);
  }, []);

  const searchAppointments = (query: string) => {
    const filtered = appointments.filter((item) =>
      item.patient.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAppointments(filtered);
  };

  const filterAppointments = (status: string) => {
    if (status === 'Todos') {
      setFilteredAppointments(appointments);
    } else {
      setFilteredAppointments(appointments.filter((item) => item.status === status));
    }
  };

  return { filteredAppointments, searchAppointments, filterAppointments };
};

export default useConsultations;
