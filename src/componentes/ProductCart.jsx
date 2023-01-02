import { useCart } from "./context/CartContext"

const ProductCart = () => {

  const { items, clearCart } = useCart()


  return (
    <div className="m-10 text-xl">
      <div>Carrito</div>
      { /* Con && */ }
      {/* { items.length == 0 && <h1 className="text-xl m-10">Agrega items a tu carrito</h1>} */}
      { items.length === 0 ?
        <h1 className="text-xl m-10">Agrega items a tu carrito</h1>
        :
        <h1>Estos son tus items:</h1>
      }
      <div>{ items.map( i => <li key={i}>Nombre: {i.name} - Precio: {i.price} - Cantidad: {i.quantity}</li>)}</div>
      <button className="btn" onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}

export default ProductCart