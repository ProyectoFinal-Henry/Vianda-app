// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbSK_ysCKe3xw8I2ms4r9S1gIKiBxH2y8",
  authDomain: "viandapp-399114.firebaseapp.com",
  projectId: "viandapp-399114",
  storageBucket: "viandapp-399114.appspot.com",
  messagingSenderId: "60101338592",
  appId: "1:60101338592:web:a91334ea206ae426f4f785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);