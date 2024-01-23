<script lang="ts">
	import { AuthForm } from '$lib/components';
	import LoginWithGoogle from '$lib/components/Auth/LoginWithGoogle.svelte';
	import { signUpEmailPassword } from '$lib/firebase/auth';
	import { afterLogin } from '$lib/helpers/route.helper';
	import { page } from '$app/stores';

	async function sugnUp(e: Event) {
		try {
			const formData = new FormData(e.target as HTMLFormElement);
			const email = formData.get('email');
			const password = formData.get('password');
			const signUpResult = await signUpEmailPassword(email as string, password as string);
			const { data } = signUpResult;
			const user = data.credential?.user;
			await afterLogin($page.url, user);
			console.log(user);
		} catch (error: any) {
			console.log(error.code);
		}
	}
</script>

<section class="bg-gray-50 dark:bg-gray-900">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<div
			class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
		>
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
				>
					Sign up to your account
				</h1>

				<AuthForm on:submit={sugnUp} btnName="Sign Up" />
				<LoginWithGoogle />
			</div>
		</div>
	</div>
</section>

<svelte:head>
	<title>Furniro | Sign Up</title>
</svelte:head>
