import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './style.css';
import axios from '../utils/axios'; // Assuming axios is configured for HTTP requests

const CadastroForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [success, setSuccess] = useState(false);

  const handleCadastro = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/cadastro', {
        nome,
        email,
        senha, // Assuming you have a registration route in your Node.js server
      });

      if (response.data.message === 'Registration successful!') {
        console.log('Registration successful!');
        setSuccess(true); // Indica que o cadastro foi realizado com sucesso
      } else {
        console.error('Registration failed:', response.data);
        // Handle registration failure (e.g., display error message)
      }
    } catch (error) {
      console.error('Registration error:', error);
      // Handle network errors or other issues
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        window.location.href = '/login'; // Redireciona para a tela de login após 2 segundos
      }, 2000);
    }
  }, [success]);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-6">
        <h2 className="title-register mb-4">Cadastro</h2>
        <Form onSubmit={handleCadastro}>
          <Form.Group controlId="formNome">
            <Form.Label className='label-register'>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              name="nome"
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label className='label-register'>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </Form.Group>
          <Form.Group controlId="formSenha">
            <Form.Label className='label-register'>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              name="senha"
            />
          </Form.Group>
          <div className="btn-register text-center d-grid gap-2">
            <Button variant="outline-primary" type="submit">
              Cadastrar
            </Button>
          </div>
        </Form>
        <div className='option-register'>
          <p>Já possui conta? <a href='/login'>Entrar</a></p>
        </div>
      </div>
    </Container>
  );
};

export default CadastroForm;
