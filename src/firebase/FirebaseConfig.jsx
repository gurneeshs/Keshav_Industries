// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7AdyUETUqSTiORx716ZVirmJ5yOYlRQo",
  authDomain: "keshavindustries-93470.firebaseapp.com",
  projectId: "keshavindustries-93470",
  storageBucket: "keshavindustries-93470.appspot.com",
  messagingSenderId: "456847308735",
  appId: "1:456847308735:web:0eb40be6eb542d7120530a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const firestore = firebase.firestore();
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
