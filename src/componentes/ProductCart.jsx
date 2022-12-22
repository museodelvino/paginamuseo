import React from 'react'
import { useCart } from "./context/CartContext"

const ProductCart = () => {

  const { items, clearCart } = useCart()

  // Con return
  // if ( items.length == 0 ) {
  //   return <h1 className="text-xl m-10">Agrega items a tu carrito</h1>
  // }

  const makeOrder = () => {
    const user = {name: "john", phone: 216454213, mail: "john@gmail.com"}
    const order = {
      buyer: user,
      items: items
    }
    console.log("Levantando orden", order);
  }

  return (
    <div className="m-10 text-xl">
      <div>Product Cart</div>
      { /* Con && */ }
      {/* { items.length == 0 && <h1 className="text-xl m-10">Agrega items a tu carrito</h1>} */}
      { items.length == 0 ?
        <h1 className="text-xl m-10">Agrega items a tu carrito</h1>
        :
        <h1>Estos son tus items:</h1>
      }
      <div>{ items.map( i => <li key={i}>{i}</li> ) }</div>
      <button className="btn" onClick={clearCart}>Vaciar carrito</button>
      <button className='btn' onClick={makeOrder}>Comprar</button>
    </div>
  )
}

export default ProductCart