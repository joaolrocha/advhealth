import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      style={{
        height: '60px',
        backgroundColor: '#fff',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      <div>
        <h5 style={{ margin: 0 }}>Bem-vindo!</h5>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>Usuário</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Avatar"
          style={{ borderRadius: '50%', width: '40px', height: '40px' }}
        />
      </div>
    </div>
  );
};

export default Header;
