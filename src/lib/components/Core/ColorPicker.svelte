<script lang="ts">
	import { Color } from 'flowbite-svelte';

	let color = '#FF0000';

	function handleColorChange(event: { target: { value: string } }) {
		color = event.target.value;
	}

	function initializeColorPicker() {
		const colorPicker = new ColorPicker(document.getElementById('color-picker'));
	}

	onMount(initializeColorPicker);
</script>

<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
	<div class="flex-grow">
		<label for="color-picker" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Color</label
		>
		<input
			type="color"
			id="color-picker"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			value={color}
			on:change={handleColorChange}
		/>
	</div>
	<div class="text-3xl font-bold text-primary-500">{color}</div>
</div>
