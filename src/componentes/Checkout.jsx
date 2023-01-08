import { collection, addDoc, getFirestore } from 'firebase/firestore'
import React from 'react'
import CheckoutList from './CheckoutList'
import { useCart } from './context/CartContext'

const Checkout = () => {

  const { items } = useCart()

  const pay = () => {

  }

  const makeOrder = () => {
    const user = {name: "Renzo", phone: 2612054958, email: "renzop95@hotmail.com"}
    const order = {
      buyer: user,
      items: items,
    }
    console.log("Levantando orden:", order);
    saveOrder(order)
  }

  const saveOrder = async ( order ) => {
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    const { id } = await addDoc(orderCollection, order)
    const orden = `Nueva orden: ${id}`
    alert(orden);
    console.log(orden);
  }

  return (
    <div className='check ml-10 font h-auto'>
        <div className='box-1'>
            <h1 className="text-3xl font-bold m-10 max-w-28">Checkout</h1>
            <form className='w-5/6  mb-14 h-auto'>
              <label className='m-10'>Nombre</label>
              <input type="text" placeholder="Nombre" className="input input-bordered w-full max-w-xs ml-10 mb-5" />

              <label className='m-10'>Apellido</label>
              <input type="text" placeholder="Apellido" className="input input-bordered w-full max-w-xs ml-10 mb-5" />

              <label className='m-10'>Teléfono</label>
              <input type="text" placeholder="Teléfono" className="input input-bordered w-full max-w-xs ml-10 mb-5" />

              <label className='m-10'>Email</label>
              <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs ml-10 mb-5" />
              
              <div className="form-control ml-10 mt-3">
                  <div className="input-group">
                      <select className="select select-bordered">
                          <option value="0" disabled selected>--Tipo de envío--</option>
                          <option value="1">Retiro en local</option>
                          <option value="2">Envío a domocilio</option>
                      </select>
                  </div>
              </div>

              <button className="btn btn-block bg-black ml-10 mt-10" onClick={pay}>PAGAR</button>

          </form>
        </div>
        
        <CheckoutList />
    </div>
  )
}

export default Checkout