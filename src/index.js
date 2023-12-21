import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Institutional/HomePage';
import RoulettePage from './Pages/Institutional/RoulettePage';
import RouletteUserPage from './Pages/Dashboard/User/RouletteUserPage';
import LoginPage from './Pages/Institutional/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 
        😺😺😺😺😺😺
          AVISO:
          Para persistir os dados com o React Router ou uso o useHistory
          ou por URL parameters, ou query params
        😺😺😺😺😺😺
*/}

      <Routes>
        {/* Institutional */}
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/roleta' element={<RoulettePage />} />

        {/* Login/Cadastro */}
        <Route exact path='/login' element={<LoginPage />} />

        {/* Dashboard */}
        <Route
          exact
          path='/dashboard-user/roleta'
          element={<RouletteUserPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
