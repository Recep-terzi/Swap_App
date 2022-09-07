import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBREksqPY1fccUKa8uVBflOFpG9Uvom8zg",
  authDomain: "swapapp-33001.firebaseapp.com",
  projectId: "swapapp-33001",
  storageBucket: "swapapp-33001.appspot.com",
  messagingSenderId: "1087646776411",
  appId: "1:1087646776411:web:c661528994b95f994e937e",
};
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { db, auth };
