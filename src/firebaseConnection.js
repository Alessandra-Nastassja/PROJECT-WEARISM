import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

// Configuração do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCUJcFq7D4636hjBpGxwC7hmDKL1kr4oC0",
    authDomain: "wearism-fe271.firebaseapp.com",
    databaseURL: "https://wearism-fe271.firebaseio.com",
    projectId: "wearism-fe271",
    storageBucket: "wearism-fe271.appspot.com",
    messagingSenderId: "283443877886",
    appId: "1:283443877886:web:e16bd00f468ea58d4152af",
    measurementId: "G-LHDJHQ3S29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;