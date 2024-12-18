import React, { useMemo } from 'react';
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { mockAppointments } from '../../mock/appointmentsMock';
import './dashboardCharts.css';

const COLORS = ['#0f172a', '#10b981', '#eab308'];

// Função auxiliar para calcular dados
const calculateChartData = () => {
  const valueByModality = {
    'Raio-X': 200,
    'Clínico Geral': 150,
    Ultrassom: 300,
    Tomografia: 250,
    Consulta: 100,
  } as const;

  const earningsByModality: Record<string, number> = {};
  let totalConfirmados = 0;
  let totalDisponiveis = 0;

  mockAppointments.forEach((appointment) => {
    const modalityKey = appointment.modality as keyof typeof valueByModality;

    if (!earningsByModality[modalityKey]) {
      earningsByModality[modalityKey] = 0;
    }
    earningsByModality[modalityKey] += valueByModality[modalityKey];

    if (appointment.patient) {
      totalConfirmados++;
    } else {
      totalDisponiveis++;
    }
  });

  const dataEarnings = Object.entries(earningsByModality).map(([key, value]) => ({
    name: key,
    value,
  }));

  const dataAvailability = [
    { name: 'Confirmados', value: totalConfirmados },
    { name: 'Disponíveis', value: totalDisponiveis },
  ];

  return { dataEarnings, dataAvailability };
};

const DashboardCharts: React.FC = () => {
  const { dataEarnings, dataAvailability } = useMemo(calculateChartData, []);

  return (
    <div className="dashboard-charts-container">
      {/* Gráfico de Pizza - Ganhos por Modalidade */}
      <div className="chart-box">
        <h6 className="chart-title">Ganhos por Modalidade</h6>
        <ResponsiveContainer width="100%" height={250}>
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

      {/* Gráfico de Barras - Disponibilidade */}
      <div className="chart-box">
        <h6 className="chart-title">Status dos Agendamentos</h6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={dataAvailability} barCategoryGap="40%">
            <XAxis dataKey="name" stroke="#333" />
            <YAxis />
            <Bar
              dataKey="value"
              fill="#10b981"
              radius={[4, 4, 0, 0]}
              barSize={40}
              background={{ fill: 'transparent' }}
            />
            <Tooltip cursor={{ fill: 'transparent' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
