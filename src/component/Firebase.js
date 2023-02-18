// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //Your Own
  apiKey: "AIzaSyBqQL3exaJlBWD3teoAkt2CeV6QF2yH_oQ",
  authDomain: "paceproject-5392f.firebaseapp.com",
  projectId: "paceproject-5392f",
  storageBucket: "paceproject-5392f.appspot.com",
  messagingSenderId: "368368850404",
  appId: "1:368368850404:web:eed63cd42b71c2f4b4e3f1",
  measurementId: "G-M0CHW8CLCB" 

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);