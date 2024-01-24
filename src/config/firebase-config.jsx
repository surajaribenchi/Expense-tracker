import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyLgq48dlJt7WOqU_mZzzDqBemmYMlo-Q",
  authDomain: "expense-tracker-b3b22.firebaseapp.com",
  projectId: "expense-tracker-b3b22",
  storageBucket: "expense-tracker-b3b22.appspot.com",
  messagingSenderId: "63227302580",
  appId: "1:63227302580:web:32d253f2fd91cb8a54bde1",
  measurementId: "G-V3XEGEHS5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider = new GoogleAuthProvider()
export const db=getFirestore(app);