<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let loading = false;

	const addTodo: SubmitFunction = () => {
		// do something before the form submits
		loading = true;

		return async ({ update }) => {
			// do something after form submits
			loading = false;
			await update();
		};
	};
</script>

<div class=" bg-slate-600 py-10">
	<pre>
		{JSON.stringify(form, null, 2)}
	</pre>

	<div class="mx-auto max-w-96">
		<ul>
			{#each data.todos as todo}
				<li class="flex justify-between items-center">
					<span class=" uppercase">{todo.text}</span>
					<form method="POST" action="?/removeTodo" use:enhance>
						<input type="hidden" name="id" value={todo.id} />
						<button class="delete" type="submit">❌</button>
					</form>
				</li>
			{/each}
		</ul>

		<form method="POST" action="?/addTodo" use:enhance={addTodo}>
			<input type="text" name="todo" />
			{#if form?.missing}
				<p class="error">This field is required</p>
			{/if}
			<button aria-busy={loading} class:secondary={loading} type="submit">+ Add Todo</button>
			<button formaction="?/clearTodo">Clear todo</button>
		</form>

		{#if form?.success}
			<p>Added todo! 🥳</p>
		{/if}
	</div>
</div>

<style>
	.error {
		color: tomato;
	}
</style>
