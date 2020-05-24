import React, { useEffect, useState } from 'react';

import Routes from "./Routes";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import './App.scss';

function App() {
  const [token, setToken] = useState('');
  
  // Configuração do Firebase
  let firebaseConfig = {
    apiKey: "AIzaSyCUJcFq7D4636hjBpGxwC7hmDKL1kr4oC0",
    authDomain: "wearism-fe271.firebaseapp.com",
    databaseURL: "https://wearism-fe271.firebaseio.com",
    projectId: "wearism-fe271",
    storageBucket: "wearism-fe271.appspot.com",
    messagingSenderId: "283443877886",
    appId: "1:283443877886:web:e16bd00f468ea58d4152af",
    measurementId: "G-LHDJHQ3S29"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    getTokenFirebase();
  }, []);

  async function getTokenFirebase() {
    await firebase.database().ref('token').on('value', (snapshot) => {
      const valor = snapshot.val();
      console.log('token', valor);
    });
  }

  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}


export default App;
