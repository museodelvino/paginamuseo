import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/products"
import Loader from "./Loader"
import WineCard from "./WineCard"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

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
        }, 1000);
    })
  }


  ////////////

  const [item, setItem] = useState([])

  useEffect(() => {
    getItems()
  }, [])


  const getItems = async () => {
    const db = getFirestore()
    const itemCollection = collection(db, 'items')
    const snapshot = await getDocs(itemCollection)
    setItem(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  }

  return (
    <div className="item-list-container" id="products">
        <div className="space-product-title">
          <h1 className="product-title">
            Nuestros Productos
          </h1>
        </div>
        <Loader loading={ items.length === 0 } />
        {/* { item.map( i => <WineCard key={i.id} {...i} />)} */}
        { items.map( i => <WineCard key={i.id} {...i}/> ) }
    </div>
  )
}
export default ItemListContainer