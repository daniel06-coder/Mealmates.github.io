// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3Y475pzdKbFCHYQ63heFn1sOdKC1N9Nk",
  authDomain: "mealmates-b4e85.firebaseapp.com",
  projectId: "mealmates-b4e85",
  storageBucket: "mealmates-b4e85.firebasestorage.app",
  messagingSenderId: "1040839032386",
  appId: "1:1040839032386:web:fc9f24a7b648f4712bf7db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
