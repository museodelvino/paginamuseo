import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/products"
import WineCard from "./WineCard"

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect( () => {

    getProducts()
        .then( res => {
            setItems( res )
        })
        .catch( err => { console.log(err) })
  }, [])

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
          resolve( PRODUCTS )
        }, 500);
    })
  }

  return (
    <div className="item-list-container">
        { items.map( i => <WineCard key={i.id} {...i}/> ) }
    </div>
  )
}
export default ItemListContainer