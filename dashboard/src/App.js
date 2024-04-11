import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Cadastro from '../src/pages/Cadastro';
import Login from '../src/pages/Login';
import HeaderBiddingPage from '../src/pages/HeaderBiddingPage';
// import VerticalMenu from './components/VerticalMenu';

const App = () => {

  return (
    <>
      <Router>
        <div className="d-flex flex-column">
          {/* <VerticalMenu  /> */}
          <div className="container">
            <Routes>
              {/* Defina a rota padrão para o login */}
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/header-bidding" element={<HeaderBiddingPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
