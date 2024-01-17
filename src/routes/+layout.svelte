<script lang="ts">
	import { Header, Footer } from '$lib/components';
	import { onMount } from 'svelte';
	import '../app.css';
	import { firebaseAuth } from '$lib/firebase/firebase';
	import { authStore } from '$lib/store';

	onMount(() => {
		const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {
			if (!user) {
				authStore.update(() => {
					return {
						user: null
					};
				});
			} else {
				authStore.update(() => {
					return {
						user: user
					};
				});
			}
		});

		return unsubscribe;
	});
</script>

<div class="relative flex flex-col min-h-screen">
	<Header />
	<main class="pt-[3.75rem] md:pt-[6.25rem]">
		<slot />
	</main>
	<Footer />
</div>
