import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getAuth,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDT_mbvSi516vuugJKi2xbrWmhr_5-Gqag",
  authDomain: "school-system-qaflah.firebaseapp.com",
  projectId: "school-system-qaflah",
  storageBucket: "school-system-qaflah.firebasestorage.app",
  messagingSenderId: "469860732094",
  appId: "1:469860732094:web:21869dd6e6d018c1cbe2ef"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {
db,
auth,
collection,
addDoc,
getDocs,
deleteDoc,
doc,
signInWithEmailAndPassword
};