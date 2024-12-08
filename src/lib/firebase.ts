import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "hopebeach.firebaseapp.com",
  projectId: "hopebeach",
  storageBucket: "hopebeach.firebasestorage.app",
  messagingSenderId: "1068494278496",
  appId: "1:1068494278496:web:86df7be0309be78c68d805",
  measurementId: "G-FH6HP81E04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
