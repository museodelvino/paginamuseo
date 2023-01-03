import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PRODUCTS } from "../data/products"
import { useCart } from './context/CartContext'
import { Counter } from "./Counter"

const ItemProduct = () => {

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
    <div>
        <div class="flex font-serif">
  <div class="flex-none w-52 relative">
    <img src={item.imageSrc} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap items-baseline">
      <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
        {item.name}
      </h1>
      <div class="flex-auto text-lg font-medium text-slate-500">
        ${item.price}
      </div>
      <div class="text-xs leading-6 font-medium uppercase text-slate-500">
        En Stock: {item.stock}
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
    </div>
    <div class="flex space-x-4 mb-5 text-sm font-medium">
      <div class="flex-auto flex space-x-4 pr-4">
        <Counter stock={item.stock} onAdd={onAdd}/>
        <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
          Comprar ahora
        </button>
        <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
          Agregar al carrito
        </button>
      </div>
    </div>
  </form>
</div>
    </div>
  )
}

export default ItemProduct