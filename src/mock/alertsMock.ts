export type Alert = {
  id: number;
  description: string;
  checked: boolean;
  date: string; // Data do alerta
};

export const alertsMock: Alert[] = [
  // Alertas para hoje (17/12/2024)
  { id: 1, description: 'Reunião com equipe às 10h', checked: false, date: '2024-12-17' },
  { id: 2, description: 'Atualizar agenda de consultas', checked: false, date: '2024-12-17' },
  { id: 3, description: 'Enviar relatório financeiro', checked: false, date: '2024-12-17' },
  { id: 4, description: 'Revisar e-mails de pacientes', checked: false, date: '2024-12-17' },
  { id: 5, description: 'Preparar materiais para a reunião', checked: false, date: '2024-12-17' },
  { id: 6, description: 'Confirmar agendamentos da semana', checked: false, date: '2024-12-17' },

  // Alertas para 18/12/2024
  { id: 7, description: 'Atender ligação do fornecedor', checked: false, date: '2024-12-18' },
  { id: 8, description: 'Agendar exames para novos pacientes', checked: false, date: '2024-12-18' },
  { id: 9, description: 'Revisar relatório financeiro mensal', checked: false, date: '2024-12-18' },

  // Alertas para 19/12/2024
  { id: 10, description: 'Reunião com o time de TI', checked: false, date: '2024-12-19' },
  { id: 11, description: 'Entregar documento ao RH', checked: false, date: '2024-12-19' },
  { id: 12, description: 'Organizar pastas dos pacientes', checked: false, date: '2024-12-19' },
];
