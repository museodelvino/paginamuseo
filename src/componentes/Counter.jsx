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
      <div className="counter">
        <button onClick={onSubHandler} className="btn btn-sm border-transparent bg-red-900 py-1 px-4 text-sm text-white hover:bg-red-200 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-3"> - </button>
        <span className="text-xl m-2">{count}</span>
        <button onClick={onAddHandler} className="btn btn-sm border-transparent bg-red-900 py-1 px-4 text-sm text-white hover:bg-red-200 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-3"> + </button>
      </div>
      <button className="btn btn-sm border-transparent bg-red-900 py-1 px-4 text-white hover:bg-red-200 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={()=>onAdd(count)}>Agregar al Carrito</button>
    </>
  )
}