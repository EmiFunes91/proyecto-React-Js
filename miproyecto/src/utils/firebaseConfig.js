// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZf-OANmzHaBu8t2y8H9nhD2gPpJmFLcE",
  authDomain: "proyecto-react-js-76301.firebaseapp.com",
  projectId: "proyecto-react-js-76301",
  storageBucket: "proyecto-react-js-76301.appspot.com",
  messagingSenderId: "964787309334",
  appId: "1:964787309334:web:372c3b7d238ed91801de37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore init
const db = getFirestore (app);

export default db;