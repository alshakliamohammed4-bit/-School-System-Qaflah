import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* 🔥 ضع بيانات Firebase الخاصة بك هنا */
const firebaseConfig = {
apiKey: "PUT_API_KEY_HERE",
authDomain: "PUT_AUTH_DOMAIN",
projectId: "PUT_PROJECT_ID",
storageBucket: "PUT_STORAGE_BUCKET",
messagingSenderId: "PUT_SENDER_ID",
appId: "PUT_APP_ID"
};

/* تشغيل Firebase */
const app = initializeApp(firebaseConfig);

/* Auth */
export const auth = getAuth(app);

/* Firestore */
export const db = getFirestore(app);

/* أدوات تستخدمها في كل الصفحات */
export {
signInWithEmailAndPassword,
onAuthStateChanged,
signOut,
collection,
addDoc,
getDocs,
deleteDoc,
doc
};
