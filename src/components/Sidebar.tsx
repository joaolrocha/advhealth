import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        width: '250px',
        height: '100vh',
        backgroundColor: '#002b5c',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <h4 style={{ marginBottom: '20px', textAlign: 'center' }}>Clínica Premium</h4>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>
          Dashboard
        </Link>
        <Link to="/schedule" style={{ color: '#fff', textDecoration: 'none' }}>
          Agendamentos
        </Link>
        <Link to="/consultations" style={{ color: '#fff', textDecoration: 'none' }}>
          Consultas
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
