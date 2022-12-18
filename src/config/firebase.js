// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmczoNvHT29agsSBH3L04NWmQeKTCG4n4",
  authDomain: "moneyball-23495.firebaseapp.com",
  projectId: "moneyball-23495",
  storageBucket: "moneyball-23495.appspot.com",
  messagingSenderId: "952166913896",
  appId: "1:952166913896:web:1b47a85c0472632a30a8dd",
  measurementId: "G-R3DSKY6LLE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)
const db = getFirestore(app);

export {auth, database, db}