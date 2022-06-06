import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/NavBar'
import Home from './pages/Home';
import Hombre from './pages/Hombre'
import Mujer from './pages/Mujer';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';

function App() {

  return (

    <div className='App'>

      <Navbar />
      <Routes>
        <Route path='/:id' element={<Home />} />
        <Route path='Hombre' element={<Hombre />} />
        <Route path='Mujer' element={<Mujer />} />
        <Route path='Productos' element={<Productos />} />
        <Route path='Contacto' element={<Contacto />} />
      </Routes>
      


    </div >

  );
}

export default App;

