import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the Firebase modules you need

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA3ew-EriQ6Oz8w5G8S4_6NSoONHwfXZ1I",
  authDomain: "web-apps-8e843.firebaseapp.com",
  projectId: "web-apps-8e843",
  storageBucket: "web-apps-8e843.firebasestorage.app",
  messagingSenderId: "977529841910",
  appId: "1:977529841910:web:ec96e00e6bca4303e0a4d7",
  // measurementId: "G-3STRYXW982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);