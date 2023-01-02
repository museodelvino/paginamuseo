import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
