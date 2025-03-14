import React, { useState } from 'react'
import { Link } from "react-router-dom"

const WineCard = ( {id, name, stock, price, imageSrc, bgc} ) => {

  const [bShadow, setbShadow] = useState("none")

  const wineCard = {
    "margin": "30px",
    "boxShadow": `${bShadow}`,
  }

  return (
    <div  style={wineCard} onMouseEnter={() => setbShadow("rgba(0, 0, 0, 0.35) 0px 5px 15px")} onMouseLeave={() => setbShadow("none")}>
        <div className="card w-80 bg-base-100 shadow-xl card-container-wine">
            <div className={`w-full min-h-[10px] ${bgc}`}></div>
            <figure><img src={imageSrc} alt="imageWine" className='imageWine' /></figure>
            <div className="card-body text-center">
                <h3 className="card-title-second font-bold text-2xl">{name}</h3>
                <p className='text-card text-lg mt-3'>${price?.toFixed(3)}</p>
                {/* <p className='text-card text-lg'>Stock: {stock}</p> */}
                <div className="card-actions justify-end">
                    <Link to={`/suscripciones/${id}`} className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-red-900 py-3 px-8 text-base font-medium text-white hover:bg-red-700 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 no-underline">Ver detalles</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WineCard