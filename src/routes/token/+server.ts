import { json } from '@sveltejs/kit';
import { auth } from '$lib/firebase/firebase.server';
import { ECookies } from '$lib/types';

/** @type {import('./$types').RequestHndler}  */
export async function POST({ request, cookies }) {
	try {
		const { token, email } = await request.json();
		const verifiedToken = await auth.verifyIdToken(token ?? '', true);

		if (verifiedToken.email === email) {
			cookies.set(ECookies.FIREBASE_SESSION_TOKEN, token, {
				maxAge: verifiedToken.exp - Date.now() / 1000,
				path: '/'
			});

			return json({ message: 'success' }, { status: 200 });
		}

		return json({ message: 'Access denied' }, { status: 403 });
	} catch (error) {
		return json({ message: 'Access denied' }, { status: 403 });
	}
}
