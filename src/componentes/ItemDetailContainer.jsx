import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PRODUCTS } from "../data/products"
import { StarIcon } from '@heroicons/react/20/solid'
import { useCart } from './context/CartContext'
import { Counter } from "./Counter"


const reviews = { href: '#', average: 4, totalCount: 117 }
  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ItemDetailContainer = () => {

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
}

return (
  <div className="bg-white">
  <div className="pt-6">
  
  {/* Image gallery */}
  <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
  <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
  <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
  <img
  src={item.imageSrc}
  alt={item.imageAlt}
  className="h-full w-full object-cover object-center"
  />
  </div>
  </div>
  </div>
  
  {/* Product info */}
  <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{item.name}</h1>
  </div>
  
  {/* Options */}
  <div className="mt-4 lg:row-span-3 lg:mt-0">
  <h2 className="sr-only">Product information</h2>
  <p className="text-3xl tracking-tight text-gray-900">{item.price}</p>
  
  {/* Reviews */}
  <div className="mt-6">
  <h3 className="sr-only">Reviews</h3>
  <div className="flex items-center">
  <div className="flex items-center">
  {[0, 1, 2, 3, 4].map((rating) => (
  <StarIcon
  key={rating}
  className={classNames(
  reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
  'h-5 w-5 flex-shrink-0'
  )}
  aria-hidden="true"
  />
  ))}
  </div>
  <p className="sr-only">{reviews.average} out of 5 stars</p>
  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
  {reviews.totalCount} reseñas
  </a>
  </div>
  </div>
  <Counter stock={item.stock} onAdd={onAdd}/>
  
  </div>
  
  <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
  {/* Description and details */}
  <div>
  <h3 className="sr-only">Description</h3>
  
  <div className="space-y-6">
  <p className="text-base text-gray-900">{item.description}</p>
  </div>
  </div>
  <div className="mt-10">
  <h2 className="text-sm font-medium text-gray-900">Detalles</h2>
  
  <div className="mt-4 space-y-6">
  <p className="text-sm text-gray-600">{item.details}</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
  }
export default ItemDetailContainer

