import React from 'react';
import { Container } from 'react-bootstrap';
import AppointmentsTable from '../../components/apointmentsTable/ApointmentsTable';
import Filters from '../../components/filters/Filters';
import SearchBar from '../../components/searchBar/SearchBar';
import LayoutDashboard from '../../layouts/LayoutDashboard';
import useConsultations from '../../hooks/useConsultations';
import './consultations.css';

const Consultations: React.FC = () => {
  const { filteredAppointments, searchAppointments, filterAppointments } = useConsultations();

  const handleEdit = (id: number) => {
    alert(`Editar agendamento ${id}`);
  };

  const handleView = (id: number) => {
    alert(`Visualizar agendamento ${id}`);
  };

  return (
    <LayoutDashboard>
      <Container fluid className="consultations-container">
        <h4 className="consultations-title">Consulta de Agendamentos</h4>
        <div className="consultations-controls">
          <SearchBar onSearch={searchAppointments} />
          <Filters onFilterChange={filterAppointments} />
        </div>
        <AppointmentsTable data={filteredAppointments} onEdit={handleEdit} onView={handleView} />
      </Container>
    </LayoutDashboard>
  );
};

export default Consultations;
