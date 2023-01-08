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
import { Home } from './componentes/Home';
import Checkout from './componentes/Checkout';
import ItemFirebase from './componentes/ItemFirebase';

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
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/item' element={<ItemFirebase />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

