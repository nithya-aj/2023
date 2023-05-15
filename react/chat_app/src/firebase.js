import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDwHTORBfrV1LxyaVQW3oX5oo8wtjL74HE",
    authDomain: "holo-82229.firebaseapp.com",
    projectId: "holo-82229",
    storageBucket: "holo-82229.appspot.com",
    messagingSenderId: "396102990065",
    appId: "1:396102990065:web:e04f63b325965f02bfd150"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()