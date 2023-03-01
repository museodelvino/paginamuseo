import React from 'react'
import Background from './Background'
import FrecuentQuestions from './FrecuentQuestions'
import ItemListContainer from './ItemListContainer'
import Geolocation from './Geolocation'

export const Home = () => {
  return (
    <div className='font'>
        <Background />
        <ItemListContainer />
        <Geolocation />
        <FrecuentQuestions />
    </div>
  )
}
