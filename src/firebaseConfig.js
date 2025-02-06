import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2hJDamPYamTP65QO7FxeTBuuaHabuR74",
  authDomain: "tuupakanautopesu-5c2a8.firebaseapp.com",
  projectId: "tuupakanautopesu-5c2a8",
  storageBucket: "tuupakanautopesu-5c2a8.firebasestorage.app",
  messagingSenderId: "458496429329",
  appId: "1:458496429329:web:945b00ecbf4654e47990b0",
  measurementId: "G-8YK6H9L15G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };