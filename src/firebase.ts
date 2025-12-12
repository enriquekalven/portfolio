// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUVvpqRf2kbE40arZiTdL6dxPM9Ikvg5o",
  authDomain: "esai-31177.firebaseapp.com",
  projectId: "esai-31177",
  storageBucket: "esai-31177.firebasestorage.app",
  messagingSenderId: "251665972970",
  appId: "1:251665972970:web:b8389e5784dc92b977e193",
  measurementId: "G-3MB351MP32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
