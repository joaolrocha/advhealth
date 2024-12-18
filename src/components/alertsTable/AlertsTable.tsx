import React, { useState, useEffect } from 'react';
import { alertsMock, Alert } from '../../mock/alertsMock';

type AlertsTableProps = {
  selectedDate: string | null; // Atualiza para aceitar null
};

const AlertsTable: React.FC<AlertsTableProps> = ({ selectedDate }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  // Filtra os alertas pela data selecionada
  useEffect(() => {
    if (selectedDate) {
      const filteredAlerts = alertsMock.filter((alert) => alert.date === selectedDate);
      setAlerts(filteredAlerts);
    } else {
      setAlerts([]);
    }
  }, [selectedDate]);

  const toggleCheck = (id: number) => {
    setAlerts((prev) =>
      prev.map((alert) => (alert.id === id ? { ...alert, checked: !alert.checked } : alert))
    );
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
      }}
    >
      <h6 style={{ textAlign: 'center', marginBottom: '1rem', color: '#1E293B' }}>
        {selectedDate ? `Alertas para ${selectedDate}` : 'Selecione uma data'}
      </h6>

      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{backgroundColor: '#1E293B'}}>
            <tr style={{ backgroundColor: '#1E293B', color: '#fff' }}>
              <th style={{ padding: '10px', borderRadius: '8px 0 0 0' }}>#</th>
              <th style={{ padding: '10px' }}>Descrição</th>
              <th style={{ padding: '10px', borderRadius: '0 8px 0 0', textAlign: 'center' }}>Concluído</th>
            </tr>
          </thead>
          <tbody>
            {alerts.length > 0 ? (
              alerts.map((alert) => (
                <tr
                  key={alert.id}
                  style={{
                    borderBottom: '1px solid #ddd',
                    backgroundColor: alert.checked ? '#f0f9ff' : '#fff',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <td style={{ padding: '10px', textAlign: 'center' }}>{alert.id}</td>
                  <td style={{ padding: '10px' }}>{alert.description}</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      checked={alert.checked}
                      onChange={() => toggleCheck(alert.id)}
                      style={{
                        width: '16px',
                        height: '16px',
                        cursor: 'pointer',
                      }}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center', padding: '15px', color: '#888' }}>
                  Nenhum alerta para esta data.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlertsTable;
