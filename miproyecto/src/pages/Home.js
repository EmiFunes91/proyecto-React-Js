import CardList from '../components/CardList/CardList';
import productos from '../utils/productsMock'
import { useState, useEffect } from 'react';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

function Home() {
  const [products, setProducts] = useState([])

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
        resolve(products)
      }, 4000)
    })
  }
  return (
    <div className='general-container'>
      <CardList title={'Productos Recomendados'} products={productos} />
      <ItemDetailContainer />
    </div>
  );
}

export default Home