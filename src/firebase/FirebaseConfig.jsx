// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvFebzR7CnTwEUc3uTRlV6vjHqF87dkd4",
  authDomain: "final-ecom-42c67.firebaseapp.com",
  projectId: "final-ecom-42c67",
  storageBucket: "final-ecom-42c67.appspot.com",
  messagingSenderId: "534648392731",
  appId: "1:534648392731:web:190afbe8018302e9fb3cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }