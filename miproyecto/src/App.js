import React from 'react';
import './assets/css/App.scss';
import ResponsiveAppBar from './components/Navbar/NavBar'
import CardList from './components/CardList/CardList';
import CardListTwo from './components/CardListTwo/CardListTwo';




function App() {
  return (


    <div className='App'>
      <ResponsiveAppBar />
      <div className='general-container'>

        <CardList title={'Productos Recomendados'} />
        <CardListTwo title={'Productos Relacionados'} />

      </div>
    </div>

  );



}



export default App;

