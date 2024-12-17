import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTachometerAlt, FaCalendarAlt, FaUserMd } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      style={{
        width: isCollapsed ? '80px' : '250px',
        height: '100vh',
        backgroundColor: '#0f172a',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        transition: 'width 0.3s ease',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 1000,
      }}
    >
      {/* Botão de Toggle */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '-20px',
          backgroundColor: '#002b5c',
          color: '#fff',
          padding: '5px',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
        }}
        onClick={toggleSidebar}
      >
        {isCollapsed ? <FaBars /> : <FaTimes />}
      </div>

      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h4 style={{ display: isCollapsed ? 'none' : 'block' }}>Clínica Premium</h4>
        <FaUserMd size={30} style={{ display: isCollapsed ? 'block' : 'none', margin: '0 auto' }} />
      </div>

      {/* Navegação */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Link
          to="/dashboard"
          style={{
            color: '#fff',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background 0.2s',
          }}
        >
          <FaTachometerAlt />
          <span style={{ display: isCollapsed ? 'none' : 'block' }}>Dashboard</span>
        </Link>

        <Link
          to="/schedule"
          style={{
            color: '#fff',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background 0.2s',
          }}
        >
          <FaCalendarAlt />
          <span style={{ display: isCollapsed ? 'none' : 'block' }}>Agendamentos</span>
        </Link>

        <Link
          to="/consultations"
          style={{
            color: '#fff',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background 0.2s',
          }}
        >
          <FaUserMd />
          <span style={{ display: isCollapsed ? 'none' : 'block' }}>Consultas</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
