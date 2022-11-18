import logo from './logo.svg';
import './App.css';
import Footer from './componentes/Footer'
// import Header from "./componentes/Header"
import NavBar from "./componentes/NavBar"
import ItemListContainer from './componentes/ItemListContainer';

function App() {

  const boton = <button>Botón</button>
  const nombre = "Renzo"
  const estilos = {
    color: "red",
    fontSize: 100,
    backgroundColor: "yellow",
  }

  return (
    <div className="App"> 
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola Mundo!"></ItemListContainer>
      {/* <h1>Hola Mundo {nombre}!</h1>
      <strong style={estilos}>Este es un mensaje de prueba</strong>
      { boton }
      <Footer></Footer> */}
    </div>
  );
}

export default App;
