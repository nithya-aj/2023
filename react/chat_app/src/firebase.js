import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCOre5EB8FGIhP31L5IKU6jDXI1fLhs4SY",
    authDomain: "chat-d5d8a.firebaseapp.com",
    projectId: "chat-d5d8a",
    storageBucket: "chat-d5d8a.appspot.com",
    messagingSenderId: "182124588753",
    appId: "1:182124588753:web:4494a1da009bc0eb841ff0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()