import { readable } from 'svelte/store';
import { is_client } from 'svelte/internal';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default readable(
	{ isActive: false, isLoggedIn: false, userId: '', isAdmin: false },
	(set) => {
		if (is_client) {
			onAuthStateChanged(getAuth(), async (user) => {
				if (user) {
					const idTokenResult = await user?.getIdTokenResult();
					if (idTokenResult?.claims && idTokenResult.claims.admin) {
						set({ isActive: true, isLoggedIn: true, userId: user.uid, isAdmin: true });
					} else {
						set({ isActive: true, isLoggedIn: true, userId: user.uid, isAdmin: false });
					}
				} else {
					set({ isActive: true, isLoggedIn: false, userId: '', isAdmin: false });
				}
			});
		}
	}
);
