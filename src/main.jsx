import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ForgotPassword from './ForgotPassword.jsx';
import NuevoCliente from './NuevoCliente.jsx';
import Ticket from './Ticket';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/olvide" element={<ForgotPassword/>} />
    <Route path="/nuevo-cliente" element={<NuevoCliente/>} />
    <Route path="/ticket" element={<Ticket />} />

  </Routes>
  </BrowserRouter>
);
