<script lang="ts">
	import { MultiSelect, Badge, Label } from 'flowbite-svelte';

	export let id: string;
	export let label: string;
	export let name: string;
	export let choises: { value: string; name: string }[];

	export let selected: string[];
</script>

<div>
	<Label class=" text-base font-normal text-black mb-[1.375rem]" for={id}>
		{label}
	</Label>
	<MultiSelect
		{name}
		{id}
		class="py-4 px-4 lg:py-[1.625rem] lg:px-[1.875rem]"
		items={choises}
		bind:value={selected}
		required
	>
		<!-- <Badge dismissable params={{ duration: 100 }} on:close={clear}>
			let:item
			let:clear
			{item.name}
		</Badge> -->
	</MultiSelect>
</div>
