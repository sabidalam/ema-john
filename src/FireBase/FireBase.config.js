// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-BYtYPAC2USrnZqRJp_YqOmM6bpOHZD0",
    authDomain: "simple-e-commerce-ea482.firebaseapp.com",
    projectId: "simple-e-commerce-ea482",
    storageBucket: "simple-e-commerce-ea482.appspot.com",
    messagingSenderId: "152048033273",
    appId: "1:152048033273:web:d675990fe7d9daed303128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;