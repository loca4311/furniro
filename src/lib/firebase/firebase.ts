// Import the functions you need from the SDKs you need
import { firebaseConfig } from '$lib/config';
import { initializeApp, type FirebaseApp, getApps, deleteApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let firebaseApp: FirebaseApp;

if (!getApps().length || !firebaseApp) {
	firebaseApp = initializeApp(firebaseConfig);
} else {
	firebaseApp = getApps()[0];
	deleteApp(firebaseApp);
	firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

export const googleProvider = new GoogleAuthProvider();
