import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavBar'
import CardList from './components/CardList/CardList';
import productos from './utils/productsMock'
import { useState, useEffect } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response)
      })
      .catch((err) => {
        console.log("Catch: Fallo la llamada.", err)
      })
      .finally(() => {
        // console.log("Finally: termino la promesa")
      })
  }, [])

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 4000)
    })
  }

  return (
    
    <div className='App'>
      <Navbar />

      <div className='general-container'>
        <CardList title={'Productos Recomendados'} products={productos} />

        <ItemDetailContainer />
      </div>
    </div>

  );
}

export default App;

