<script lang="ts">
	import { AuthForm } from '$lib/components';
	import { addAdminPermision, sendPasswordReset } from '$lib/firebase/auth';

	const pageName = 'Add Admin';

	async function addAdmin(e: Event) {
		try {
			const formData = new FormData(e.target as HTMLFormElement);
			const email = formData.get('email');

			await addAdminPermision(email as string);
		} catch (error: any) {
			console.log(error);
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
					Add admin
				</h1>

				<AuthForm on:submit={addAdmin} isEmailForm btnName="Send Email" />
			</div>
		</div>
	</div>
</section>

<svelte:head>
	<title>Furniro | {pageName}</title>
</svelte:head>
