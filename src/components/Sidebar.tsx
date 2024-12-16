import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        width: '250px',
        height: '100vh',
        backgroundColor: '#002b5c',
        color: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        padding: '20px',
      }}
    >
      <h4 className="text-center">Clínica Premium</h4>
      <Nav className="flex-column mt-4">
        <Nav.Link href="/dashboard" style={{ color: 'white' }}>
          Dashboard
        </Nav.Link>
        <Nav.Link href="/agenda" style={{ color: 'white' }}>
          Agenda
        </Nav.Link>
        <Nav.Link href="/pacientes" style={{ color: 'white' }}>
          Pacientes
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
