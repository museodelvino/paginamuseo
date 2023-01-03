import { useState } from "react"

export const Counter = ( { stock, onAdd } ) => {

  const [count, setCount] = useState(1)

  const onAddHandler = () => {
    if ( count < stock ) {
        setCount( count => count + 1 )
    }
  }
  
  const onSubHandler = () => {
    if ( count >= 1 ) {
        setCount( count => count - 1 )
    }
  }

  return (
    <>
      <div className="counter mb-4 font">
        <button onClick={onSubHandler} className="btn btn-sm py-1 px-4 text-sm text-white w-3 bg-black rounded-none"> - </button>
        <span className="text-xl m-2">{count}</span>
        <button onClick={onAddHandler} className="btn btn-sm py-1 px-4 text-sm text-white w-3 bg-black rounded-none"> + </button>
      </div>
      <button className="btn btn-sm py-1 px-4 text-white mb-8 bg-black rounded-none" onClick={()=>onAdd(count)}>Agregar al Carrito</button>
    </>
  )
}