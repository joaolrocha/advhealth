import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaCalendarAlt, FaUserMd } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Colapsar sidebar em telas menores
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        padding: isCollapsed ? '10px' : '20px',
        transition: 'width 0.3s ease',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 1000,
      }}
    >
      {/* Botão de Toggle - Centralizado no Meio da Tela */}
      <div
        style={{
          position: 'absolute',
          top: '50%', // Centraliza verticalmente
          right: '-10px', // Posiciona para fora da sidebar
          transform: 'translateY(-50%)', // Ajusta para centralização
          backgroundColor: '#fff', // Fundo branco
          color: '#000', // Bolinhas pretas
          width: '25px',
          height: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          cursor: 'pointer',
          borderRadius: '8px',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
          transition: 'background 0.3s',
        }}
        onClick={toggleSidebar}
      >
        {/* Três bolinhas */}
        <div
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#000',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#000',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#000',
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        {!isCollapsed ? (
          <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>
            Clínica Premium
          </h4>
        ) : (
          <FaUserMd size={30} style={{ color: '#fff' }} />
        )}
      </div>

      {/* Navegação */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
          {!isCollapsed && <span>Dashboard</span>}
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
          {!isCollapsed && <span>Agendamentos</span>}
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
          {!isCollapsed && <span>Consultas</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
