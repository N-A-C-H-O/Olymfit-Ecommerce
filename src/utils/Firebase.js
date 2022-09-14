import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCaq7juqe7HFF3XfuSN4a4iYQtsY2fgOqg",
  authDomain: "olymfit-ecommerce.firebaseapp.com",
  projectId: "olymfit-ecommerce",
  storageBucket: "olymfit-ecommerce.appspot.com",
  messagingSenderId: "287886674475",
  appId: "1:287886674475:web:e2d7dd97520307e810786e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
