import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AlertsTable from '../../components/alertsTable/AlertsTable';
import AppointmentsList from '../../components/apointments/Apointments';
import CalendarComponent from '../../components/calendar/CalendarComponent';
import DashboardCharts from '../../components/charts/DashboardCharts';
import SearchBar from '../../components/searchBar/SearchBar';
import LayoutDashboard from '../../layouts/LayoutDashboard';

type Appointment = {
  time: string;
  patient: string;
};

// Mock de compromissos
const mockAppointments: Record<string, Appointment[]> = {
  '1': [
    { time: '10:00', patient: 'João Silva' },
    { time: '14:00', patient: 'Maria Oliveira' },
  ],
  '2': [
    { time: '09:00', patient: 'Carlos Mendes' },
    { time: '15:00', patient: 'Ana Paula' },
  ],
  '3': [{ time: '11:00', patient: 'Ricardo Lima' }],
};

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const handleDateSelect = (date: string): void => {
    setSelectedDate(date);
    setAppointments(mockAppointments[date] || []);
  };

  const handleSearch = (query: string) => {
    console.log('Buscar por:', query);
  };

  return (
    <div className="w-100" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <LayoutDashboard>
      <div>
        <Row className="mb-4">
          <Col>
            <SearchBar onSearch={handleSearch} />
          </Col>
        </Row>
      </div>
      {/* Conteúdo */}
      <div className="w-100" style={{ padding: '20px', backgroundColor: '#fff', display: 'flex' }}>
        {/* SearchBar */}

        {/* Gráficos e Calendário */}
        <Row className="mb-4" style={{ width: '70%' }}>
          {/* Gráficos */}
          <Col md={8} style={{ display: 'flex', gap: '20px' }}>
            {/* Gráfico 1 */}
            <div style={{ flex: 1 }}>
              {/* <h6 style={{ textAlign: 'center' }}>Ganhos por Consulta</h6> */}
              <DashboardCharts />
            </div>
          </Col>
          {/* Avisos/Lembretes */}
          <Row className="mt-4">
            <Col md={12}>
              <h5 style={{ marginBottom: '10px', color: '#002b5c' }}>Avisos/Lembretes</h5>
              <AlertsTable />
            </Col>
          </Row>
        </Row>
        <div style={{ display: 'flex', flexDirection: 'column', width:'30%', alignItems: 'center'}}>
          {/* Calendário */}
          <Col md={4}>
            <h6 style={{ textAlign: 'center' }}>Calendário</h6>
            <CalendarComponent onDateSelect={handleDateSelect} />
          </Col>
          {/* Lista de Compromissos */}
          <Row className="mt-4">
            <Col md={12}>
              <AppointmentsList appointments={appointments} selectedDate={selectedDate} />
            </Col>
          </Row>
        </div>
      </div>
      </LayoutDashboard>
    </div>
  );
};

export default Dashboard;
