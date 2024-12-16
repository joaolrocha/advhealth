export type Appointment = {
  time: string;
  patient: string;
};

export const mockStatistics = {
  Agendamentos: 12,
  'Pacientes Atendidos': 8,
  Faturamento: 'R$ 500,00',
};

export const mockAgenda: Appointment[] = [
  { time: '10:00', patient: 'João Silva' },
  { time: '11:00', patient: 'Maria Oliveira' },
];

export const mockAppointments: Record<string, Appointment[]> = {
  '1': [
    { time: '10:00', patient: 'Consulta com João' },
    { time: '14:00', patient: 'Exame de Maria' },
  ],
  '2': [
    { time: '09:00', patient: 'Consulta com Carlos' },
    { time: '16:00', patient: 'Retorno de Fernanda' },
  ],
};
