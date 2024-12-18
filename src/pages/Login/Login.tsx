import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaLock } from 'react-icons/fa'; // Ícone do cadeado
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard'); // Redireciona para a Dashboard
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: '#0f172a',
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={4} sm={10} xs={12}>
          <div
            style={{
              backgroundColor: '#1e293b',
              borderRadius: '8px',
              padding: '40px',
              color: '#fff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Ícone do cadeado */}
            <div className="text-center mb-4">
              <FaLock size={32} color="#fff" />
            </div>

            {/* Título */}
            <h3 className="text-center mb-2" style={{ fontWeight: 'bold' }}>
              Welcome back!
            </h3>

            {/* Formulário */}
            <Form>
              {/* Email */}
              <Form.Group
                controlId="email"
                className="mb-4"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Form.Label style={{color: '#cbd5e1' }}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    color: '#fff',
                    borderRadius: '6px',
                    padding: '10px',
                    width: '100%', // Faz o input ocupar a largura do contêiner pai
                    maxWidth: '400px', // Define uma largura máxima consistente
                  }}
                />
              </Form.Group>

              {/* Senha */}
              <Form.Group
                controlId="password"
                className="mb-4"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Form.Label style={{ color: '#cbd5e1' }}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  style={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    color: '#fff',
                    borderRadius: '6px',
                    padding: '10px',
                    width: '100%',
                    maxWidth: '400px', // Consistente com o input de email
                  }}
                />
              </Form.Group>

              {/* Checkbox */}
              <Form.Group controlId="rememberMe" className="mb-4">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  style={{ color: '#cbd5e1' }}
                />
              </Form.Group>

              {/* Botão de Login */}
              <Button
                className="w-100 mb-3"
                style={{
                  backgroundColor: '#10b981',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px',
                  fontWeight: 'bold',
                }}
                onClick={handleLogin}
              >
                Continue
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
