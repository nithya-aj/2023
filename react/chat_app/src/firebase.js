import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCa_QY5PluB5hX6lQFCf6h7fFoAVvZT0ew",
    authDomain: "holo-1c46a.firebaseapp.com",
    projectId: "holo-1c46a",
    storageBucket: "holo-1c46a.appspot.com",
    messagingSenderId: "938563997284",
    appId: "1:938563997284:web:308acbc43148468e5a1971"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()