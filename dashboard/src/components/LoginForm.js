import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './style.css';
import axios from '../utils/axios';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Adicione um estado para rastrear se o usuário está logado
  
  const handleLogin = async (event) => {
    event.preventDefault(); // Evita a submissão padrão do formulário

    try {
        const response = await axios.post('http://localhost:3001/login', {
            email,
            senha,
        });
        if (response.data.message === 'Login successful!') {
            // Marque o usuário como logado
            setIsLoggedIn(true);
            console.log('Login successful!');
        } else {
            console.error('Login failed:', response.data);
        }
    } catch (error) {
        console.error('Login error:', error);
    }
};

  // Se o usuário estiver logado, redirecione para a página de header-bidding
  if (isLoggedIn) {
    return <Navigate to="/header-bidding" />;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-6">
        <h2 className="title-login mb-4">Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label className='label-login'>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </Form.Group>
          <Form.Group controlId="formSenha">
            <Form.Label className='label-login'>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              name="senha"
            />
          </Form.Group>
          <div className="btn-login text-center d-grid gap-2">
            <Button variant="outline-primary" type="submit">
              Entrar
            </Button>
          </div>
        </Form>
        <div className='option-register'>
          <p>Ainda não possui uma conta? <a href='/cadastro'>Cadastre-se</a></p>
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
