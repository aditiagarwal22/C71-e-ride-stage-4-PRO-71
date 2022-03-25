import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyArsoKQfEV60O-jomyCnrDbgVzv_cPwH5o",
    authDomain: "e-ride-b99bb.firebaseapp.com",
    projectId: "e-ride-b99bb",
    storageBucket: "e-ride-b99bb.appspot.com",
    messagingSenderId: "408162095074",
    appId: "1:408162095074:web:a7f18673ed2a95ad9933bb"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
