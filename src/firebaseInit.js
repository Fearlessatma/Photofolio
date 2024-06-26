
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqheIFZLoMFd5wfxjlMPmiDbsxPga6tuo",
  authDomain: "photofolio-b1bb4.firebaseapp.com",
  projectId: "photofolio-b1bb4",
  storageBucket: "photofolio-b1bb4.appspot.com",
  messagingSenderId: "173205060133",
  appId: "1:173205060133:web:4799eae1627cd8c76b5dcc",
  measurementId: "G-0192D9EEFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
