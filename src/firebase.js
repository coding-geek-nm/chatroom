import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCumeJwTkH1Xto4fPONb7HcNT98BERuEVE",
  authDomain: "dept-8517d.firebaseapp.com",
  projectId: "dept-8517d",
  storageBucket: "dept-8517d.appspot.com",
  messagingSenderId: "308523035626",
  appId: "1:308523035626:web:9b822d7fdb0a584d96e093",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore(); // <-- Fixed typo here

export { app, auth, storage, db };


