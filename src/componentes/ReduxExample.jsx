import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function ReduxExample() {
  const contador = useSelector(state => state.value);
  const dispatch = useDispatch()

  const handleIncrementarContador = () => {
    dispatch({ type: 'contador/incrementar' })
  }
  const handleDisminuirContador = () => {
    dispatch({ type: 'contador/disminuir' })
  }

  return (
    <div>
      <div>
        <span>Contador: {contador}</span>
      </div>
      <div>
        <button onClick={handleIncrementarContador}>Incrementar</button>
        <button onClick={handleDisminuirContador}>Disminuir</button>
      </div>
    </div>
  )
}

export default ReduxExample