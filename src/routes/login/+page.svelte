<script lang="ts">
	import { AuthForm, LoginWithGoogle } from '$lib/components';
	import { signInEmailPassword } from '$lib/firebase/auth';
	import { afterLogin } from '$lib/helpers/route.helper';
	import { page } from '$app/stores';

	const pageName = 'Login';

	async function login(e: Event) {
		try {
			const formData = new FormData(e.target as HTMLFormElement);
			const email = formData.get('email');
			const password = formData.get('password');
			const signInResult = await signInEmailPassword(email as string, password as string);
			const { data } = signInResult;
			const user = data.credential?.user;

			await afterLogin($page.url, user?.uid);

			console.log(user);
		} catch (error: any) {
			console.log(error.code);
		}
	}
</script>

<svelte:head>
	<title>Furniro | {pageName}</title>
</svelte:head>

<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<div
			class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
		>
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
				>
					Sign in to your account
				</h1>

				<AuthForm on:submit={login} btnName="Log In" />
				<LoginWithGoogle />
			</div>
		</div>
	</div>
</section>
