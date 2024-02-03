<script lang="ts">
	import Label from './Label.svelte';

	export let type: 'text' | 'email' | 'password' | 'number' | 'date' | 'file' = 'text';
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
	export let accept: string = '';
	let extraClass = '';
	export { extraClass as class };

	let input: HTMLInputElement | HTMLTextAreaElement;
</script>

<div class={outerClass}>
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<label
		class="
			flex flex-col items-start
			{extraClass} 
		"
		on:click
		on:keydown
		on:click={(e) => input.focus()}
	>
		{#if label}
			<Label {label} {disabled} {isError} />
		{/if}
		{#if !isTextArea}
			<input
				class="
					w-full
					py-4 px-4
					lg:py-[1.625rem] lg:px-[1.875rem]
					text-base text-black
				  border border-[#9F9F9F] rounded-lg
					focus-within:ring-1 focus-within:border-primary-500 ring-primary-500
					focus:ring-primary-500
					hover:ring-1 hover:border-primary-500 hover:ring-primary-600
				"
				{type}
				{id}
				{name}
				{value}
				{placeholder}
				{disabled}
				{required}
				{autocomplete}
				{accept}
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
				class="
					py-4 px-4
					lg:py-[1.625rem] lg:px-[1.875rem]
					appearance-none bg-transparent grow text-left
					w-full min-h-[10.375rem] max-h-[16rem]
					text-base text-black
					border border-[#9F9F9F] rounded-lg
					focus-within:ring-1 focus-within:border-primary-500 ring-primary-500
					focus:ring-primary-500
					hover:ring-1 hover:border-primary-500 hover:ring-primary-600
					
				"
				{id}
				{name}
				{placeholder}
				{disabled}
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
