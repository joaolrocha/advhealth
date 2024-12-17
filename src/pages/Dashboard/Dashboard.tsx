import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AlertsTable from '../../components/alertsTable/AlertsTable';
import AppointmentsList from '../../components/apointments/Apointments';
import CalendarComponent from '../../components/calendar/CalendarComponent';
import DashboardCharts from '../../components/charts/DashboardCharts';
import SearchBar from '../../components/searchBar/SearchBar';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import './Dashboard.css';
import { useAppointments } from '../../hooks/useAppointments';

const Dashboard: React.FC = () => {
  const { selectedDate, appointments, loadAppointments } = useAppointments();

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
              <CalendarComponent onDateSelect={loadAppointments} />
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
