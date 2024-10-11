// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-6004a.firebaseapp.com",
  projectId: "ai-course-generator-6004a",
  storageBucket: "ai-course-generator-6004a.appspot.com",
  messagingSenderId: "632639169046",
  appId: "1:632639169046:web:c06169571d50696e91cb37",

  measurementId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app);

export { db };
