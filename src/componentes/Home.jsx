import React from 'react'
import Background from './Background'
import ItemListContainer from './ItemListContainer'
import Contacto from './Contacto'
import Carrusel from './Carrusel'

export const Home = () => {
  return (
    <div className='font'>
        {/* <Background /> */}
        <Carrusel />
        <ItemListContainer />
        <Contacto />
    </div>
  )
}
