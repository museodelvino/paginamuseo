import React from 'react'
import { Link } from "react-router-dom"

const WineCard = ( {id, name, stock, price, imageSrc} ) => {
  return (
    <div className='wine-card'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={imageSrc} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title card-title-second">{name}</h2>
                <p className='text-card'>{price}</p>
                <p className='text-card'>Stock: {stock}</p>
                <div className="card-actions justify-end">
                    <Link to={`/products/${id}`} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Ver detalles</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WineCard