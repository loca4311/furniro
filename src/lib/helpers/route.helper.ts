import { goto } from '$app/navigation';
import { sendJWTToken } from '$lib/firebase/auth';
import { setUser } from '$lib/firebase/database.client';

export async function afterLogin(url, userId, email) {
	const route = url.searchParams.get('redirect') || '/';
	await setUser(userId, email);
	await sendJWTToken();
	await goto(route);
}
