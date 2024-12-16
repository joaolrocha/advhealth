import React, { useState } from 'react';

type Alert = {
  id: number;
  description: string;
  checked: boolean;
};

const initialAlerts: Alert[] = [
  { id: 1, description: 'Reunião com equipe às 10h', checked: false },
  { id: 2, description: 'Atualizar agenda de consultas', checked: false },
  { id: 3, description: 'Enviar relatório financeiro', checked: false },
];

const AlertsTable: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);

  const toggleCheck = (id: number) => {
    setAlerts((prev) =>
      prev.map((alert) => (alert.id === id ? { ...alert, checked: !alert.checked } : alert))
    );
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '10px' }}>#</th>
          <th style={{ border: '1px solid #ddd', padding: '10px' }}>Descrição</th>
          <th style={{ border: '1px solid #ddd', padding: '10px' }}>Concluído</th>
        </tr>
      </thead>
      <tbody>
        {alerts.map((alert) => (
          <tr key={alert.id}>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{alert.id}</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{alert.description}</td>
            <td style={{ textAlign: 'center', border: '1px solid #ddd', padding: '10px' }}>
              <input
                type="checkbox"
                checked={alert.checked}
                onChange={() => toggleCheck(alert.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlertsTable;
