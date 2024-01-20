import admin from 'firebase-admin';
import serviceAccount from '$lib/firebase/firebase-secrets.server.json';
// import { PRIVATE_FIREBASE_SERVICE_ACCOUNT } from '$env/static/private';

// const serviceAccount = JSON.parse(PRIVATE_FIREBASE_SERVICE_ACCOUNT);

if (!admin.apps || admin.apps.length === 0) {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount)
	});
}

export const db = admin.firestore();
// export const auth = admin.auth();
// export const storage = admin.storage();
