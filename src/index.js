import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Institutional/HomePage';
import RoulettePage from './Pages/Institutional/RoulettePage';
import RouletteUserPage from './Pages/Dashboard/User/RouletteUserPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Institutional */}
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/roleta' element={<RoulettePage />} />

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
