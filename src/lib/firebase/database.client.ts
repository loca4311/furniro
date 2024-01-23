import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from './firebase.client';

export async function setUser(user) {
	const users = collection(db, 'users');
	await setDoc(doc(users, user.uid), {
		user_id: user.uid,
		email: user.email
	});
}
