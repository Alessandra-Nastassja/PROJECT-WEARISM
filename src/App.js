import React, { useEffect, useState } from 'react';

import firebase from './firebaseConnection';

import './App.scss';

function App() {
  const [token, setToken] = useState('');
  
  useEffect(() => {
    async function getTokenFirebase() {
      await firebase.database().ref('token').on('value', (snapshot) => {
        const valor = snapshot.val();
        console.log('token', valor);
      });
    }
    
    getTokenFirebase();
  }, []);


  return (
    <>
      <p>token: {token}</p>
    </>
  );
}


export default App;
