import './App.css';
import NavBar from './componentes/NavBar';
import Background from './componentes/Background';
import FrecuentQuestions from './componentes/FrecuentQuestions';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductTitle from './componentes/ProductTitle';
import React, { useState } from 'react';
import { CartContext } from './componentes/context/CartContext';
import ProductCart from './componentes/ProductCart';
import Detail from "./componentes/Detail"

function App() {

  return (
      <BrowserRouter>
        <NavBar />
        <Background />
        <ProductTitle />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path='/products/:id' element={<ItemDetailContainer/>} />
          <Route path='/products/cart' element={<ProductCart />} />
        </Routes>
        <FrecuentQuestions />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
