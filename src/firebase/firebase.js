// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "YOUR_API_KEY",
  // authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  // projectId: "YOUR_PROJECT_ID",
  // storageBucket: "YOUR_PROJECT_ID.appspot.com",
  // messagingSenderId: "YOUR_SENDER_ID",
  // appId: "YOUR_APP_ID"

  apiKey: "AIzaSyDlNF_iJ0er_yt1Uc3cgueppAXULy-Y7Ks",
  authDomain: "versevault-blurb.firebaseapp.com",
  projectId: "versevault-blurb",
  storageBucket: "versevault-blurb.firebasestorage.app",
  messagingSenderId: "559245778991",
  appId: "1:559245778991:web:148608eff0e8c6213726da",
  measurementId: "G-S8JH0NPG2Z"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// export { auth };