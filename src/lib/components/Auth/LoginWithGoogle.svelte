<script lang="ts">
	import { loginWithGoogle } from '$lib/firebase/auth';
	import { afterLogin } from '$lib/helpers/route.helper';
	import messagesStore from '$lib/store/messages.store';
	import { page } from '$app/stores';

	async function loginGoogle() {
		try {
			const user = await loginWithGoogle();
			await afterLogin($page.url, user);
			console.log(user);
		} catch (error) {
			if (error.code === 'auth/cancelled-popup-request') {
				return;
			}
			console.log(error);
			messagesStore.showError();
		}
	}
</script>

<button
	on:click={loginGoogle}
	class="max-w-[30rem ] flex justify-around items-center text-center w-full my-0 mx-auto py-2 px-2 font-medium shadow-lg rounded bg-white hover:bg-golden-500"
>
	<img
		src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
		class="relative w-10 h-10 ml-0 mr-2"
		alt="google logo"
	/> <span class="w-5/6">Sign up with Google</span>
</button>
