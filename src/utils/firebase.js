// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChZ8wx8PYsOfsjgbEnE5KzjIb_rxxubAE",
  authDomain: "netflixgpt-c195e.firebaseapp.com",
  projectId: "netflixgpt-c195e",
  storageBucket: "netflixgpt-c195e.appspot.com",
  messagingSenderId: "559478602126",
  appId: "1:559478602126:web:8bb3e277b4ddb060184cdf",
  measurementId: "G-TSJSGS7301",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
