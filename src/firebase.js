import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6lUzilMypFwQf4cFYV2y27bHQcbby2Ns",
    authDomain: "to-do-list-638fd.firebaseapp.com",
    projectId: "to-do-list-638fd",
    storageBucket: "to-do-list-638fd.appspot.com",
    messagingSenderId: "420954375659",
    appId: "1:420954375659:web:060bbd8ccfef4ab80645ae",
    measurementId: "G-FV4YX7VH32"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }