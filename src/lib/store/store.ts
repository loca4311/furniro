import { goto } from '$app/navigation';
import { firebaseAuth, googleProvider } from '$lib/firebase/firebase';
import { signInWithPopup, type User } from 'firebase/auth';
import { writable } from 'svelte/store';

export const authStore = writable<{ user: User | null }>({
	user: null
});

export const authHandlers = {
	logout: async () => {
		await firebaseAuth.signOut();
		goto('/');
	},
	loginWithGoogle: async () => {
		await signInWithPopup(firebaseAuth, googleProvider);
		goto('/');
	}
};
