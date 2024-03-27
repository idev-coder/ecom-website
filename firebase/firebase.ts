// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { env } from "process";

export function initializeFirebaseStorage() {
  const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseStorage = getStorage(firebaseApp);

  return firebaseStorage; // Return Firebase Storage service
}
