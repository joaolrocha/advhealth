import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AlertsTable from '../../components/alertsTable/AlertsTable';
import AppointmentsList from '../../components/apointments/Apointments';
import CalendarComponent from '../../components/calendar/CalendarComponent';
import DashboardCharts from '../../components/charts/DashboardCharts';
import SearchBar from '../../components/searchBar/SearchBar';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import './Dashboard.css'; // Arquivo CSS separado

type Appointment = {
  time: string;
  patient: string;
};

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
    <div className="dashboard-container">
      <LayoutDashboard>
        {/* SearchBar */}
        <div className="dashboard-searchbar">
          <Row>
            <Col>
              <SearchBar onSearch={handleSearch} />
            </Col>
          </Row>
        </div>

        {/* Conteúdo */}
        <div className="dashboard-content">
          {/* Gráficos e Lembretes */}
          <div className="dashboard-left">
            <DashboardCharts />
            <h5 className="alerts-title">Avisos/Lembretes</h5>
            <AlertsTable />
          </div>

          {/* Calendário e Compromissos */}
          <div className="dashboard-right">
            <div className="calendar-container">
              <h6>Calendário</h6>
              <CalendarComponent onDateSelect={handleDateSelect} />
            </div>
            <div className="appointments-container">
              <AppointmentsList appointments={appointments} selectedDate={selectedDate} />
            </div>
          </div>
        </div>
      </LayoutDashboard>
    </div>
  );
};

export default Dashboard;
