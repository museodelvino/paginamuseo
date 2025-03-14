import './App.css';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import { Home } from './componentes/Home';
import Contacto from './componentes/Contacto';

function App() {

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suscripciones" element={<ItemListContainer />} />
          <Route path='/suscripciones/:id' element={<ItemDetailContainer/>} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;

