export type Doctor = {
  id: number;
  name: string;
  specialty: string;
};

export type Appointment = {
  date: string; // Formato: YYYY-MM-DD
  time: string;
  patient: string;
  modality: string;
  doctorId: number;
};

// Lista de médicos
export const doctors: Doctor[] = [
  { id: 1, name: 'Dr. Carlos Mendes', specialty: 'Raio-X' },
  { id: 2, name: 'Dra. Ana Paula', specialty: 'Clínico Geral' },
  { id: 3, name: 'Dr. João Silva', specialty: 'Ultrassom' },
  { id: 4, name: 'Dra. Beatriz Costa', specialty: 'Tomografia' },
];

// Lista de pacientes e modalidades
const patients = ['João Silva', 'Maria Oliveira', 'Carlos Mendes', 'Ana Paula', 'Fernanda Souza'];
const modalities = ['Raio-X', 'Clínico Geral', 'Ultrassom', 'Tomografia', 'Consulta'];

// Gera atendimentos para um dia específico
const generateAppointmentsForDay = (date: string): Appointment[] => {
  const appointments: Appointment[] = [];
  let currentHour = 7;

  for (let i = 0; i < 9; i++) {
    if (currentHour === 12) currentHour++; // Pula horário de almoço
    appointments.push({
      date,
      time: `${currentHour.toString().padStart(2, '0')}:00`,
      patient: patients[Math.floor(Math.random() * patients.length)],
      modality: modalities[Math.floor(Math.random() * modalities.length)],
      doctorId: doctors[Math.floor(Math.random() * doctors.length)].id,
    });
    currentHour++;
  }

  return appointments;
};

// Mock de atendimentos para diferentes dias
export const mockAppointments: Appointment[] = [
  ...generateAppointmentsForDay('2024-12-17'),
  ...generateAppointmentsForDay('2024-12-18'),
  ...generateAppointmentsForDay('2024-12-19'),
  ...generateAppointmentsForDay('2024-12-20'),
];
