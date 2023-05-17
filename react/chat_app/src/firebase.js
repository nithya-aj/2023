import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC0l3nhNEf3YzvXcEoHovbKAowCqjuatpo",
    authDomain: "holo-37fd2.firebaseapp.com",
    projectId: "holo-37fd2",
    storageBucket: "holo-37fd2.appspot.com",
    messagingSenderId: "542550549541",
    appId: "1:542550549541:web:71d0ab1d984a179f260bcc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()