<script lang="ts">
	import { EPages } from '$lib/types';

	export let btnName: string;
	export let isEmailForm: boolean = false;
</script>

<form class="space-y-4 md:space-y-6" on:submit|preventDefault>
	<div>
		<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Your email</label
		>
		<input
			type="email"
			name="email"
			id="email"
			class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder="name@company.com"
		/>
	</div>
	{#if !isEmailForm}
		<div>
			<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Password</label
			>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="••••••••"
				class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
		</div>
	{/if}

	<div class="flex items-center justify-between">
		{#if false}
			<div class="flex items-start">
				<div class="flex items-center h-5">
					<input
						id="remember"
						aria-describedby="remember"
						type="checkbox"
						class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
					/>
				</div>
				<div class="ml-3 text-sm">
					<label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
				</div>
			</div>
		{/if}
		{#if !isEmailForm}
			<a
				href={EPages.FORGORPASSWORD}
				class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
				>Forgot password?</a
			>
		{/if}
	</div>
	<button
		type="submit"
		class="max-w-[30rem ] flex justify-around items-center text-center w-full my-0 mx-auto py-2 px-2 font-medium shadow-lg rounded bg-white hover:bg-golden-500"
		><span class="w-5/6">{btnName}</span>
	</button>

	<!-- <p class="text-sm font-light text-gray-500 dark:text-gray-400">
		Don’t have an account yet? <a
			href={EPages.SIGNUP}
			class="font-medium text-primary-600 hover:underline dark:text-primary-500">{btnName}</a
		>
	</p> -->
</form>
