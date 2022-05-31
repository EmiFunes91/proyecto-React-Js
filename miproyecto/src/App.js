import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/NavBar'
import Home from './pages/Home';
import Hombre from './pages/Hombre'
import Mujer from './pages/Mujer';
import Niños from './pages/Niños';
import Marcas from './pages/Marcas';
import Contacto from './pages/Contacto';

function App() {
  
  return (

    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Hombre/>} />
          <Route path='/' element={<Mujer/>} />
          <Route path='/' element={<Niños/>} />
          <Route path='/' element={<Marcas/>} />
          <Route path='/' element={<Contacto/>} />
        </Routes>
      </BrowserRouter>
    </div >

  );
}

export default App;

