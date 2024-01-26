<script lang="ts">
	import { e } from 'vitest/dist/reporters-O4LBziQ_.js';
	import Label from './Label.svelte';

	export let type: 'text' | 'email' | 'password' | 'number' | 'date' = 'text';
	export let name: string;
	export let placeholder = '';
	export let id = '';
	export let min: number = -1;
	export let max: number = -1;
	export let value: string | number = '';
	export let errorMessage: string | undefined | null = '';
	export let label = '';
	export let required = false;
	export let autocomplete = '';
	export let isTextArea = false;
	export let isFocused = false;
	export let isError = false;
	export let disabled = false;
	export let outerClass = '';
	let extraClass = '';
	export { extraClass as class };

	let input: HTMLInputElement | HTMLTextAreaElement;
</script>

<div class={outerClass}>
	<label>
		{#if label}
			<Label {label} {disabled} {isError} />
		{/if}
		{#if !isTextArea}
			<input
				{type}
				{id}
				{name}
				{value}
				{placeholder}
				{disabled}
				{required}
				{autocomplete}
				bind:this={input}
				on:input
				on:change
				on:focus={() => (isFocused = true)}
				on:blur={(e) => {
					e.currentTarget.value = e.currentTarget.value.trim();
					isFocused = false;
				}}
				on:input={(e) => (value = e.currentTarget.value)}
			/>
		{:else}
			<textarea
				{name}
				{disabled}
				{id}
				minlength={min}
				maxlength={max}
				bind:this={input}
				bind:value
				on:input
				on:change
				on:focus
				on:blur
				on:focus={() => (isFocused = true)}
				on:blur={() => (isFocused = false)}
				on:input={(e) => (value = e.currentTarget.value)}
			/>
		{/if}
	</label>
	{#if max > 0 && typeof value === 'string'}
		<span class="block mt-0.5 label font-normal">{value.length}/{max}</span>
	{/if}
	{#if !!errorMessage && isError}
		<span class=" mt-0.5 font-light text-red-500">{errorMessage}</span>
	{/if}
</div>
