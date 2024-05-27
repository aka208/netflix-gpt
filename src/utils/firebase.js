// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTtruz1SqasRsswscIiWdfS-Ir2ZR5ZQU",
  authDomain: "netflixgpt-4a663.firebaseapp.com",
  projectId: "netflixgpt-4a663",
  storageBucket: "netflixgpt-4a663.appspot.com",
  messagingSenderId: "561827055804",
  appId: "1:561827055804:web:c9baecff05b4ba627468b9",
  measurementId: "G-V7NB7F9BQT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
