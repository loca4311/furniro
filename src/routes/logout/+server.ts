import { json } from '@sveltejs/kit';
import { ECookies, EPages } from '$lib/types';

/** @type {import('./$types').RequestHndler}  */
export async function GET({ cookies }) {
	cookies.delete(ECookies.FIREBASE_SESSION_TOKEN, { path: EPages.HOME });

	return json({ message: 'success' }, { status: 200 });
}
