
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMKA4bOIilS8wtS29_p0_LX2143qo0Dc8",
  authDomain: "attire-f90b3.firebaseapp.com",
  projectId: "attire-f90b3",
  storageBucket: "attire-f90b3.firebasestorage.app",
  messagingSenderId: "966256966418",
  appId: "1:966256966418:web:2dd276d5303d58308751cb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;