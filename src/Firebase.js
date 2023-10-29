// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxzb6nq0vyYyu5FwsTUE_yb476CfH72UY",
  authDomain: "ecommerce-fba55.firebaseapp.com",
  databaseURL: "https://ecommerce-fba55-default-rtdb.firebaseio.com",
  projectId: "ecommerce-fba55",
  storageBucket: "ecommerce-fba55.appspot.com",
  messagingSenderId: "869948584551",
  appId: "1:869948584551:web:3c2bd5fad68e70aea51ac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;