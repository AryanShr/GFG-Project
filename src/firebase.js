// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB923_MDXLdZ2WOT1ti5aRhYmBRimPWjg0",
    authDomain: "gfg-ai-healthcare.firebaseapp.com",
    projectId: "gfg-ai-healthcare",
    storageBucket: "gfg-ai-healthcare.appspot.com",
    messagingSenderId: "843148664380",
    appId: "1:843148664380:web:78889fba06c33f5e7e2d39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()