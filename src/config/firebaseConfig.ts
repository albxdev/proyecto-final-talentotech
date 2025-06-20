import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4eXDWjmMIuo7pp49MQKnIHNAWcRr5gZ8",
  authDomain: "asados-al-barril-3906b.firebaseapp.com",
  projectId: "asados-al-barril-3906b",
  storageBucket: "asados-al-barril-3906b.firebasestorage.app",
  messagingSenderId: "470701562767",
  appId: "1:470701562767:web:606d8356fea3a8d5bdc9fa",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };