<script lang="ts">
	import { onMount } from 'svelte';
	import { Header, Footer } from '$lib/components';
	import messagesStore from '$lib/store/messages.store';
	import '../app.css';
	import '$lib/firebase/firebase.client';
	import { sendJWTToken } from '$lib/firebase/auth';
	import type { User } from '$lib/types';

	export let data;

	$: user = data.user as User;

	let timeId: string | number | NodeJS.Timeout | undefined;

	async function sendServerToken() {
		try {
			await sendJWTToken();
		} catch (error) {
			clearInterval(timeId);
			messagesStore.showError();
			console.log(error);
		}
	}

	onMount(async () => {
		try {
			await sendServerToken();
			timeId = setInterval(
				async () => {
					await sendServerToken();
				},
				1000 * 60 * 10
			);
		} catch (error) {
			console.log(error);
			messagesStore.showError();
		}

		return () => {
			clearInterval(timeId);
		};
	});

	function closeMessage() {
		messagesStore.hide();
	}
</script>

<div class="relative flex flex-col min-h-screen">
	<Header />
	<main class="pt-[3.75rem] md:pt-[6.25rem]">
		<slot />
	</main>
	<Footer />
	{#if $messagesStore.show}
		<div class="fixed top-5 right-5 z-[2000]">
			<div
				class=" 
						max-w-screen-sm p-4 border rounded-lg
						{$messagesStore.type === 'error' ? 'border-red-500 text-red-600 bg-red-100' : ''}
						{$messagesStore.type === 'success' ? 'border-green-500 text-green-600 bg-green-100' : ''}
					"
			>
				<div class="alert alert-dismissible alert-danger flex items-center space-x-4" role="alert">
					<strong>{$messagesStore.type.toUpperCase()}:</strong>
					<p>{$messagesStore.message}</p>
					<button on:click={closeMessage} type="button" class="btn-close w-6 h-6" aria-label="Close"
						>❌</button
					>
				</div>
			</div>
		</div>
	{/if}
</div>
