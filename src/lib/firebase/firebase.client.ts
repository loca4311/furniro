// Import the functions you need from the SDKs you need
import { is_client } from 'svelte/internal';
import { firebaseConfig } from '$lib/config';
// import { getAnalytics } from 'firebase/analytics';
import { initializeApp, type FirebaseApp, getApps, deleteApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

let firebaseApp: FirebaseApp;

if (!getApps().length || !firebaseApp) {
	firebaseApp = initializeApp(firebaseConfig);
	if (is_client) {
		getAnalytics(firebaseApp);
	}
} else {
	firebaseApp = getApps()[0];
	deleteApp(firebaseApp);
	firebaseApp = firebaseConfig;
}

// export const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);
// export const functions = getFunctions();
