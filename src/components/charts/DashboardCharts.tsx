import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const dataEarnings = [
  { name: 'Consulta', value: 500 },
  { name: 'Exames', value: 300 },
  { name: 'Retornos', value: 200 },
];

const dataAvailability = [
  { name: 'Disponíveis', value: 30 },
  { name: 'Agendados', value: 70 },
];

const COLORS = ['#002b5c', '#e0e0e0'];

const DashboardCharts: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between'}}>
      {/* Gráfico de Pizza - Ganhos por Consulta */}
      <div style={{ width: '30%', textAlign: 'center' }}>
        <h6>Ganhos por Consulta</h6>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={dataEarnings} dataKey="value" outerRadius={80} label>
              {dataEarnings.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Barra - Disponibilidade */}
      <div style={{ width: '30%', textAlign: 'center' }}>
        <h6>Disponibilidade de Agendas</h6>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dataAvailability}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#002b5c" />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
