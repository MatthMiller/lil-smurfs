import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Institutional/HomePage';
import RoulettePage from './Pages/Institutional/RoulettePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/roleta' element={<RoulettePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
