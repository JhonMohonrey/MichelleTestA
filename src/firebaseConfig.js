import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD14X4Z9pYJBjY5sP-kqGvtaAXC6s9MMdI",
    authDomain: "testa-682aa.firebaseapp.com",
    projectId: "testa-682aa",
    storageBucket: "testa-682aa.firebasestorage.app",
    messagingSenderId: "922769893688",
    appId: "1:922769893688:web:8312897a79e3183cb039cd",
    measurementId: "G-Q19ZM2Q0WS" 
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };