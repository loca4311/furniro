<script lang="ts">
	export let href = '#';
	let extraClasses = '';
	export let ariaCurrent: 'page' | 'step' | 'location' | 'date' | 'time' | null | undefined = null;
	export { extraClasses as class };
</script>

<a
	{href}
	aria-current={ariaCurrent}
	class="w-full block py-2 font-medium hover:text-golden-600 whitespace-nowrap {extraClasses}"
>
	<slot />
</a>
