import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const user = {
    name: 'João Luiz',
    initials: 'JL',
  };

  const handleLogout = () => {
    console.log('Logout realizado');
    // Redireciona o usuário para a tela de login
    navigate('/');
  };


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
      {/* Título */}
      <div>
        <h5 style={{ margin: 0, fontWeight: 'bold', color: '#002b5c' }}>
          Bem-vindo!
        </h5>
      </div>

      {/* Informações do Usuário */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span style={{ fontWeight: '500', color: '#002b5c' }}>
          {user.name}
        </span>

        {/* Avatar com as Iniciais */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#002b5c',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          {user.initials}
        </div>

        {/* Botão de Logout */}
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#e53e3e',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#c53030')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = '#e53e3e')
          }
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
