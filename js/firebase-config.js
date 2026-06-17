// js/firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyB5s5U-en6R-Ad6uXhjYMQuC7nXBbh0wPA",
  authDomain: "qynexa-fashion.firebaseapp.com",
  projectId: "qynexa-fashion",
  storageBucket: "qynexa-fashion.firebasestorage.app",
  messagingSenderId: "921391488980",
  appId: "1:921391488980:web:bdfcef3883f363a012c041"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
