import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	sendPasswordResetEmail
} from 'firebase/auth';
import messagesStore from '$lib/store/messages.store';
import { goto } from '$app/navigation';
import { EPages } from '$lib/types';
import { handlePasswordResetError } from '$lib/utils';

export const loginWithGoogle = async () => {
	const userCredential = await signInWithPopup(getAuth(), new GoogleAuthProvider());
	return userCredential.user;
};

export const logout = async () => {
	signOut(getAuth());
	await fetch('/logout');
};

export const signUpEmailPassword = async (email: string, password: string) => {
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
		const credential = await createUserWithEmailAndPassword(getAuth(), email, password);
		messagesStore.hide();

		return {
			type: 'success',
			status: 200,
			data: { credential }
		};
	} catch (error: any) {
		if (error.code === 'auth/email-already-in-use') {
			messagesStore.showError('You have already registered, please log in');
			goto(EPages.LOGIN);
		}

		return {
			type: 'failure',
			status: 400,
			data: { error }
		};
	}
};

export const signInEmailPassword = async (email: string, password: string) => {
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
		const credential = await signInWithEmailAndPassword(getAuth(), email, password);
		messagesStore.hide();
		return {
			type: 'success',
			status: 200,
			data: { credential }
		};
	} catch (error: any) {
		const message = error.message;
		messagesStore.showError(message);

		return {
			type: 'failure',
			status: 500,
			data: { error: message }
		};
	}
};

export const sendPasswordReset = async (email: string) => {
	try {
		const firebaseAuth = getAuth();

		await sendPasswordResetEmail(firebaseAuth, email);
		goto(EPages.LOGIN);
		messagesStore.showSuccess(`Email sent to the ${email}`);
		return {
			type: 'success',
			status: 200
		};
	} catch (error: any) {
		handlePasswordResetError(error);
		console.log(error.code);
	}
};

export const sendJWTToken = async () => {
	const auth = getAuth();
	const user = auth.currentUser;

	if (!user) {
		return;
	}

	const token = await user.getIdToken(true);
	await fetch('/token', {
		method: 'POST',
		body: JSON.stringify({ token, email: user.email })
	});
};
