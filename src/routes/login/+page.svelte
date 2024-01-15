<script lang="ts">
	import { enhance } from '$app/forms';
	import Container from '$lib/components/Container.svelte';
	import { error } from '@sveltejs/kit';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<pre>
	{JSON.stringify(form, null, 2)}
</pre>

<div class="py-10 bg-slate-600">
	<Container>
		<h1 class="text-6xl text-center">Forms</h1>
		<form method="POST" use:enhance class="mx-auto max-w-[20rem] flex flex-col space-y-3">
			<div class="flex flex-col">
				<input type="text" name="user" value={form?.data?.user ?? ''} />
				{#if form?.errors?.user}
					<span class="text-sm text-red-600">Name is required</span>
				{/if}
			</div>
			<div class="flex flex-col">
				<input type="password" name="password" />
				{#if form?.errors?.password}
					<span class="text-sm text-red-600">Password is required</span>
				{/if}
			</div>

			<button type="submit">Login</button>
		</form>
	</Container>
</div>
