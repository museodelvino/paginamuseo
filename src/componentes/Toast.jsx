import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import React from 'react';

const Toast = () => {

  const notify = () => {
    toast("¡Producto agregado!");
  };

  return (
    <>
        <button onClick={notify} className='btn text-xl text-white bg-black'>BTN</button>
        <ToastContainer />
    </>
  )
}

export default Toast
