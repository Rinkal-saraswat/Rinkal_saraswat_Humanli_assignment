
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzyL9kxJVb_xWUdkWacpdLTz7YBBNtz6s",
  authDomain: "realtimechat-rs.firebaseapp.com",
  projectId: "realtimechat-rs",
  storageBucket: "realtimechat-rs.appspot.com",
  messagingSenderId: "5555424774",
  appId: "1:5555424774:web:7d789bd366de6b656dbd87",
  measurementId: "G-2M3GGE87JT"
};


export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()