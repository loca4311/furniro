import type { Handle, HandleServerError } from '@sveltejs/kit';
import { auth } from '$lib/firebase/firebase.server';
import { redirect } from '@sveltejs/kit';
import { locale } from 'svelte-i18n';
import { ECookies } from '$lib/types';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.request.headers.get('accept-language')?.split(',')[0];
	const protectedRoutes = ['/add-product', '/edit', '/profile'];
	const guestRoutes = ['/login', '/signup', 'forgot-password'];

	if (lang) {
		locale.set(lang);
	}

	try {
		event.locals.user = await getFirebaseUser(event.cookies.get(ECookies.FIREBASE_SESSION_TOKEN));
	} catch (error) {
		event.locals.user = null;
	}

	const user = event.locals?.user;
	const url = event.url;

	if (url.pathname !== '/') {
		if (!user && protectedRoutes.find((u) => url.pathname.indexOf(u) > -1)) {
			throw redirect(302, `/login?redirect=${url.pathname}`);
		}
		if (user && guestRoutes.find((u) => url.pathname.indexOf(u) > -1)) {
			throw redirect(302, '/');
		}
	}

	const response = await resolve(event);

	return response;
};
export const handleError: HandleServerError = ({ error }) => {
	const message = 'Error caught in [server-hooks]: ' + (error as any)?.message;
	console.error(message);
	return { message };
};

async function getFirebaseUser(token) {
	if (!token) {
		return null;
	}

	const decodedToken = await auth.verifyIdToken(token, true);
	const user = await auth.getUser(decodedToken.uid);

	return {
		id: user.uid,
		email: user.email
	};
}
