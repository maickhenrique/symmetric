import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  // Verifica se o usuário está autenticado. Se estiver, renderiza o componente fornecido.
  // Caso contrário, redireciona para a página de login.
  const isAuthenticated = false; // Coloque sua lógica de autenticação aqui
  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
