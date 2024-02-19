// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs4v8W-bihAeNY-2AigQUKCcR7uE04F7w",
  authDomain: "solomay-nsc.firebaseapp.com",
  projectId: "solomay-nsc",
  storageBucket: "solomay-nsc.appspot.com",
  messagingSenderId: "192375981261",
  appId: "1:192375981261:web:5c3a9464b2654555ff1584",
  measurementId: "G-GGHC6J7BK0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};