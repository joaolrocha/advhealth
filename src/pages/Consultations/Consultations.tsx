import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AppointmentsTable from '../../components/apointmentsTable/ApointmentsTable';
import Filters from '../../components/filters/Filters';
import SearchBar from '../../components/searchBar/SearchBar';

type Appointment = {
  id: number;
  patient: string;
  doctor: string;
  date: string;
  time: string;
  status: string;
  value: string;
};

const mockData: Appointment[] = [
  { id: 1, patient: 'João Silva', doctor: 'Dr. Carlos Mendes', date: '2024-12-20', time: '08:00', status: 'Agendado', value: 'R$ 200' },
  { id: 2, patient: 'Maria Oliveira', doctor: 'Dra. Ana Paula', date: '2024-12-21', time: '09:00', status: 'Cancelado', value: 'R$ 150' },
  { id: 3, patient: 'Ricardo Lima', doctor: 'Dr. João Silva', date: '2024-12-22', time: '10:00', status: 'Confirmado', value: 'R$ 300' },
];

const Consultations: React.FC = () => {
  const [filteredData, setFilteredData] = useState<Appointment[]>(mockData);

  const handleSearch = (query: string) => {
    const result = mockData.filter((item) =>
      item.patient.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(result);
  };

  const handleFilterChange = (filter: string) => {
    if (filter === 'Todos') {
      setFilteredData(mockData);
    } else {
      setFilteredData(mockData.filter((item) => item.status === filter));
    }
  };

  const handleEdit = (id: number) => {
    alert(`Editar agendamento ${id}`);
  };

  const handleView = (id: number) => {
    alert(`Visualizar agendamento ${id}`);
  };

  return (
    <Container fluid style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h4 style={{ marginBottom: '20px', color: '#002b5c' }}>Consulta de Agendamentos</h4>
      <SearchBar onSearch={handleSearch} />
      <Filters onFilterChange={handleFilterChange} />
      <AppointmentsTable data={filteredData} onEdit={handleEdit} onView={handleView} />
    </Container>
  );
};

export default Consultations;
