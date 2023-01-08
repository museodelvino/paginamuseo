import { Link } from "react-router-dom"
import ContainerCart from "./ContainerCart"
import { useCart } from "./context/CartContext"

const ProductCart = () => {

  const { items } = useCart()


  return (
    <div className="m-10 text-xl font">
      { items.length === 0 ?
        <div>
          <h1 className="text-3xl font-bold m-10 m">Carrito vacío 🤔</h1>
          <p className="text-xl font-semibold m-10 m">¡Agrega un producto a tu carrito!</p>
          <Link to='/products'>
            <button className="btn text-base font-semibold btn-sm py-1 px-4 text-white bg-black rounded-none ml-10">Ir a Productos</button>
          </Link>
        </div>
        :
        <div>
          <h1 className="text-3xl font-bold mb-6">Tus productos:</h1>
          <ContainerCart />
        </div>
      }
      
    </div>
  )
}

export default ProductCart