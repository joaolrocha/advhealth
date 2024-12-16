import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard'); // Redireciona para a Dashboard
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row className="w-100">
        <Col md={4} className="mx-auto">
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>
            <Button className="w-100 mt-4" onClick={handleLogin}>
              Entrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
