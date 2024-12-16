import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#002b5c',
        color: '#fff',
        padding: '10px 20px',
        marginBottom: '20px',
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Clínica Premium</div>

      {/* User Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Olá, Usuário</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Avatar"
          style={{ borderRadius: '50%', width: '40px', height: '40px' }}
        />
        <button
          style={{
            backgroundColor: '#e74c3c',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
