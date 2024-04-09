import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJhQUtla9AmD0FUZLl_2K1m3yLT3sE6JM",
  authDomain: "auraed-oup2m.firebaseapp.com",
  projectId: "auraed-oup2m",
  storageBucket: "auraed-oup2m.appspot.com",
  messagingSenderId: "24144471200",
  appId: "1:24144471200:web:bdb286a8224edb0c1755c5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
