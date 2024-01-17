// Import the functions you need from the SDKs you need
import { firebaseConfig } from '$lib/config';
import { initializeApp, type FirebaseApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
