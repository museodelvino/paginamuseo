import React from 'react'

const ItemListContainer = ( { greeting } ) => {
  return (
    <div className="text-3xl font-bold tracking-tight text-gray-900">
        { greeting }
    </div>
  )
}

export default ItemListContainer