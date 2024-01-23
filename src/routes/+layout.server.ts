// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '$lib/firebase/firebase.server';
import { ECookies } from '$lib/types';

export const load = async ({ cookies }) => {
	// onAuthStateChanged(getAuth(), async (user) => {
	// 	let token = null;
	// 	// if (user) {
	// 	// 	token = await user.getIdTokenResult();
	// 	// 	console.log(token);
	//   // }

	// });
	let firebaseResult;
	try {
		firebaseResult = await getFirebaseUser(cookies.get(ECookies.FIREBASE_SESSION_TOKEN));
	} catch (err) {
		user = null;
		console.log(err);
	}

	const user = firebaseResult;

	return {
		user
	};
};

async function getFirebaseUser(token) {
	if (!token) {
		return null;
	}

	const decodedToken = await auth.verifyIdToken(token, true);
	const user = await auth.getUser(decodedToken.uid);

	return {
		id: user.uid,
		email: user.email,
		admin: user.customClaims?.admin ?? false
	};
}
