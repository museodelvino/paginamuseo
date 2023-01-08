import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, getDoc, addDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDbkMjnSa8ttC5jGUQ9gJSPCyikdi5rQhk",
    authDomain: "proyecto-prueba-97920.firebaseapp.com",
    projectId: "proyecto-prueba-97920",
    storageBucket: "proyecto-prueba-97920.appspot.com",
    messagingSenderId: "1042952587333",
    appId: "1:1042952587333:web:9352ed5bc3e4828dedbb2c",
    measurementId: "G-XCD80777S2"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

// Obtener data por ID
const getItemsById = async (id) => {
    const docRef = doc(collection(db, "items"), id)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
}

// Obtener id para la orden de compra
const addOrder = async (order) => {
    const docSnap = await addDoc(collection(db, "orders"), order)
    return docSnap.id
}

export {
    db,
    getItemsById,
    addOrder
}