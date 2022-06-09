import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#d50000'
    },
    secondary: {
      main: '#212121'
    }
  }
});

function App() {

  return (

    <div className="App">
      <ThemeProvider theme={customTheme}>
        <ResponsiveAppBar />
        <h1>EFSport | Tu Tienda Online</h1>
        <ItemDetailContainer />
        <ItemListContainer />

      </ThemeProvider>
    </div>
  );
}

export default App;