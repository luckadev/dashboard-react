import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyASAGNN8XjYK436EBC7mjiKFRtcN7D6eN4",
    authDomain: "tickets-277c8.firebaseapp.com",
    projectId: "tickets-277c8",
    storageBucket: "tickets-277c8.appspot.com",
    messagingSenderId: "473992653156",
    appId: "1:473992653156:web:f92c2840e778e4583f3271",
    measurementId: "G-EQZC6FYHNN"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };