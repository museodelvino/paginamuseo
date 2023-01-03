import { useCart } from "./context/CartContext"

const ProductCart = () => {

  const { items, clearCart } = useCart()


  return (
    <div className="m-10 text-xl">
      { items.length === 0 ?
        <h1 className="text-xl m-10">Carrito vacío 🤔</h1>
        :
        <h1>Tus productos:</h1>
      }
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio unitario</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
      {items.map( i => <tr>
        <th scope="row">{i.id}</th>
        <td>{i.name}</td>
        <td>{i.quantity}</td>
        <td>${i.price}</td>
        <td>${i.price * i.quantity}</td>
      </tr>)}
      </tbody>
      </table>
      <button className="btn mt-8" onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}

export default ProductCart