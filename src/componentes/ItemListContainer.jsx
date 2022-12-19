import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/products"
import Loader from "./Loader"
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
        }, 3000);
    })
  }

  return (
    <div className="item-list-container">
        <Loader loading={ items.length === 0 } />
        { items.map( i => <WineCard key={i.id} {...i}/> ) }
    </div>
  )
}
export default ItemListContainer