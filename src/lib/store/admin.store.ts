import { readable } from 'svelte/store';
import { is_client } from 'svelte/internal';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default readable({ isAdmin: false }, (set) => {
	if (is_client) {
		onAuthStateChanged(getAuth(), async (user) => {
			if (user) {
				const idTokenResult = await user?.getIdTokenResult();

				if (idTokenResult?.claims && idTokenResult.claims.admin) {
					set({ isAdmin: true });
				}
			} else {
				set({ isAdmin: false });
			}
		});
	}
});
