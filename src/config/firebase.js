// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm2GIBlXJANlMPtEQq75UR7tJvY1JrLKQ",
  authDomain: "react-auth-574d4.firebaseapp.com",
  projectId: "react-auth-574d4",
  storageBucket: "react-auth-574d4.appspot.com",
  messagingSenderId: "1019163379152",
  appId: "1:1019163379152:web:cbb4ae2b33a1d06533a5d5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const provider = new GoogleAuthProvider()



export default app;

export {
    signInWithRedirect
};