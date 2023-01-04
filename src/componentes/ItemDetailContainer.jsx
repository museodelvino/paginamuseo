import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { PRODUCTS } from "../data/products"
import { StarIcon } from '@heroicons/react/20/solid'
import { useCart } from './context/CartContext'
import { Counter } from "./Counter"
  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ItemDetailContainer = () => {

  const [isInCart, setIsInCart] = useState(false)

  const [item, setItem] = useState({})

  const { id } = useParams()

  const { addToCart } = useCart()

  useEffect(() => {
    getItemDetail().then( res => {
        setItem( res )
    })
  }, [ id ])
  
  const getItemDetail = () => {
    return new Promise( (resolve, reject) => {
      const item = PRODUCTS.find( p => p.id == id )
      setTimeout(() => {
          resolve( item )
      }, 500);
    })
  }

  const addHandler = () => {
    addToCart( id )
  }

  const onAdd = (quantity) => {
    const newItem = {
        ...item,
        quantity
    }
    addToCart(newItem)
    //aca
    setIsInCart(true)
}

return (
  <div className="bg-white cont font">
    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
      <img
        src={item.imageSrc}
        alt={item.imageAlt}
        className="h-full object-cover object-center "
      />
    </div>
    <div className="info">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-5">{item.name}</h1>
      </div>
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <p className="text-2xl tracking-tight text-gray-900 mb-5">${item.price}</p>
        <div>
          <h3 className="sr-only">Description</h3>
          <div className="space-y-6">
            <p className="text-xl text-gray-900 mb-5">{item.description}</p>
          </div>
        </div>
        <div className="mt-10">
          {/* <h2 className="text-sm font-medium text-gray-900">Detalles</h2>
          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600">{item.details}</p>
          </div> */}
          {/* <Counter stock={item.stock} onAdd={onAdd}/> */}

          {isInCart ? (
            <div className="flex flex-col space-y-8 mt-6">
              <Link to='/cart' className="btn btn-sm py-1 px-4 text-white mb-8 bg-black rounded-none w-44 h-11">Finalizar compra</Link>
            </div>)
              :
            (
             <Counter onAdd={onAdd} stock={item.stock} />)}
        </div>
      </div>
    </div>
  </div>
  )
}
export default ItemDetailContainer

