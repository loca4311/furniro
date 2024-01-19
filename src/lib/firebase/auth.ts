import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut
} from 'firebase/auth';
import messagesStore from '$lib/store/messages.store';
import { goto } from '$app/navigation';
import { EPages } from '$lib/types';

export const loginWithGoogle = async () => {
	const firebaseAuth = getAuth();
	const userCredential = await signInWithPopup(firebaseAuth, new GoogleAuthProvider());
	return userCredential.user;
};

export const logout = async () => {
	signOut(getAuth());
};

export const signUpEmailPassword = async (email: string, password: string) => {
	const firebaseAuth = getAuth();
	if (!email || !password) {
		messagesStore.showError('Please enter valid email and password.');
		return {
			type: 'failure',
			status: 404,
			data: { error: 'Email or password are missing' }
		};
	}

	if (password.length < 6) {
		messagesStore.showError('Password should be 6 charecters atleast.');
		return {
			type: 'failure',
			status: 404,
			data: { error: 'Password is to short.' }
		};
	}
	try {
		const credential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
		return {
			type: 'success',
			status: 200,
			data: { ...credential }
		};
	} catch (error: any) {
		if (error.code === 'auth/email-already-in-use') {
			messagesStore.showError('You have already registered, please log in');
			goto(EPages.LOGIN);
		}

		// const message = error.code;
		// messagesStore.showError(error);
		return {
			type: 'failure',
			status: 400,
			data: { error }
		};
	}
};
