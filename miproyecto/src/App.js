import React from 'react';
import './assets/css/App.scss';
import ResponsiveAppBar from './components/Navbar/NavBar'
import CardList from './components/CardList/CardList';





function App() {
  return (


    <div className='App'>
      <ResponsiveAppBar />
      <div className='general-container'>

        <CardList title={'Productos Recomendados'} />
        

      </div>
    </div>

  );



}



export default App;

