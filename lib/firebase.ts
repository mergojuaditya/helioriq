import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG1ry-PMPuxEdCd0PRJrVQe36f1A3-Frg",
  authDomain: "helioriq.firebaseapp.com",
  projectId: "helioriq",
  storageBucket: "helioriq.firebasestorage.app",
  messagingSenderId: "997925209414",
  appId: "1:997925209414:web:c70f2028ae70123ae15147",
  measurementId: "G-ZWG6RFT1P2",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the Firebase Auth service
export const auth = getAuth(app);
