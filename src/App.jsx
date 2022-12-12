import './App.css';
import NavBar from './componentes/NavBar';
import Background from './componentes/Background';
import FrecuentQuestions from './componentes/FrecuentQuestions';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Background />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path='/products/:id' element={<ItemDetailContainer/>} />
      </Routes>
      <FrecuentQuestions />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
