import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDUVvpqRf2kbE40arZiTdL6dxPM9Ikvg5o",
  authDomain: "esai-31177.firebaseapp.com",
  projectId: "esai-31177",
  storageBucket: "esai-31177.firebasestorage.app",
  messagingSenderId: "251665972970",
  appId: "1:251665972970:web:d3094862e631b85677e193",
  measurementId: "G-TPJ7KN86EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};
