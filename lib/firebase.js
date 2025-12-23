// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG1ry-PMPuxEdCd0PRJrVQe36f1A3-Frg",
  authDomain: "helioriq.firebaseapp.com",
  projectId: "helioriq",
  storageBucket: "helioriq.firebasestorage.app",
  messagingSenderId: "997925209414",
  appId: "1:997925209414:web:c70f2028ae70123ae15147",
  measurementId: "G-ZWG6RFT1P2"
};

// Prevent multiple initializations in Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
