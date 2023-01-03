import './App.css';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import ProductCart from './componentes/ProductCart';
import Contact from './componentes/Contact';
import { CartContextProvider } from './componentes/context/CartContext';
import { Detail } from './componentes/Detail';
import { Home } from './componentes/Home';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path='/products/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<ProductCart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

