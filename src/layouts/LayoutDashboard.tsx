import React, { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/header/Header';

type LayoutDashboardProps = {
  children: ReactNode;
};

const LayoutDashboard: React.FC<LayoutDashboardProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Header fixo no topo */}
        <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#fff' }}>
          <Header />
        </div>

        {/* Conteúdo */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', backgroundColor: '#f5f5f5' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
