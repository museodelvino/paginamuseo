import React, { useEffect } from 'react'

const ProductList = () => {

  useEffect(() => {
    console.log('Empieza getProducts');
    getProducts().then( response => {
        console.log( response );
    })
    console.log('Termina getProducts');
  }, [])

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve( ['prod1', 'prod2', 'prod3'] )
        }, 3000)
    })
  }
  
//   const randomPromise = () => {
//     const productsPromise = new Promise( (resolve, reject) => {
//         const rand = Math.random()
//         console.log(rand);
//         if ( rand > 0.5 ) {
//             resolve('Se resolvió satisfactoriamente')
//         }
//         reject('Rechazada!')
//     })

//     productsPromise.then( ( response ) => {
//         console.log( 'RESPUESTA: ', response );
//     }).catch( ( err ) => {
//         console.log( 'ERROR: ', err);
//     } )
//   }

  return (
    <div>ProductsList</div>
  )
}

export default ProductList