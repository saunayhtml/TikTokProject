
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyBG07C5omgzRodnw3GCp5xeAk5h-UpWZ5o",
  authDomain: "tiktok---jornada-73ba5.firebaseapp.com",
  projectId: "tiktok---jornada-73ba5",
  storageBucket: "tiktok---jornada-73ba5.appspot.com",
  messagingSenderId: "105988022667",
  appId: "1:105988022667:web:df741fdbd73b3273f0cf8e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;