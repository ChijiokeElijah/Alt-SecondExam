// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx516LDYIXvIVB209Qu53GYFu8AeGK_TU",
  authDomain: "second-semester-exam-4609f.firebaseapp.com",
  databaseURL: "https://second-semester-exam-4609f-default-rtdb.firebaseio.com",
  projectId: "second-semester-exam-4609f",
  storageBucket: "second-semester-exam-4609f.appspot.com",
  messagingSenderId: "66686761233",
  appId: "1:66686761233:web:b0d2bc58868eed112c74b0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();




export default app;

export {
    signInWithRedirect
};