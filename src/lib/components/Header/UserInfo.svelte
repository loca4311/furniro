<script lang="ts">
	import { authStore, authHandlers } from '$lib/store';
	import type { User } from 'firebase/auth';
	import { Link, Authentication } from '$lib/components';

	let currentUser: User | null;

	authStore.subscribe((value) => {
		currentUser = value.user;
	});
</script>

<div>
	{#if currentUser}
		<div class="items-center space-x-2 inline-flex">
			<img
				src={currentUser?.photoURL}
				alt={currentUser?.displayName}
				class="
        rounded-full h-12 w-12 object-cover
      "
			/>
			<div class="flex flex-col">
				<p>
					Logged in us: <span class="text-golde-600 italic font-bold"
						>{currentUser?.displayName}</span
					>
				</p>
				<p>{currentUser?.email}</p>
			</div>
			<Link on:click={authHandlers.logout}>Log Out</Link>
		</div>
	{:else}
		<Authentication />
	{/if}

	<div></div>
</div>
