// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVTkYUhY5ZrHaJNjyRSqRQBAP4txtsg40",
  authDomain: "restourant-commerace-4f356.firebaseapp.com",
  projectId: "restourant-commerace-4f356",
  storageBucket: "restourant-commerace-4f356.appspot.com",
  messagingSenderId: "51295726035",
  appId: "1:51295726035:web:cd89c2beae1f4920c3e726",
  measurementId: "G-0Y3PV5D0L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

