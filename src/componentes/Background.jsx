import React from 'react'

const Background = () => {
  return (
    <div className='fondoInicio'>
        <div className="hero min-h-screen" style={{ backgroundImage: `url("http://mundoclubhouse.com/wp-content/uploads/2019/09/IMG_5153-1-1024x575.jpg")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold tituloInicio">¡Bienvenidos!</h1>
                <p className="mb-5 text-2xl parrafoInicio">EXQUISITOS MOMENTOS PARA DISFRUTAR EN ALTURA</p>
                <button className="btn btn-primary bg-pink-700 border-pink-700">Comenzar</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Background