import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/NavBar'
import Home from './pages/Home';
import Hombre from './pages/Hombre'
import Mujer from './pages/Mujer';
import Marcas from './pages/Marcas';
import Contacto from './pages/Contacto';

function App() {

  return (

    <div className='App'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Hombre' element={<Hombre />} />
        <Route path='Mujer' element={<Mujer />} />
        <Route path='Marcas' element={<Marcas />} />
        <Route path='Contacto' element={<Contacto />} />
      </Routes>
      <Home />


    </div >

  );
}

export default App;

