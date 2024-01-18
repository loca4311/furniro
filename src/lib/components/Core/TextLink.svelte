<script lang="ts">
	import { page } from '$app/stores';

	export let href = '#';
	let extraClasses = '';
	export let ariaCurrent: 'page' | 'step' | 'location' | 'date' | 'time' | null | undefined = null;
	export { extraClasses as class };
</script>

<a
	{href}
	aria-current={ariaCurrent}
	on:click
	class="
		w-full block py-2 font-medium hover:text-golden-600 whitespace-nowrap
		{$page.url.pathname === href ? 'text-golden-600' : ''}
		{extraClasses}
	"
>
	<slot />
</a>
