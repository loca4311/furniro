<script lang="ts">
	import { Hero } from '$lib/components';
	import { Advantages } from '$lib/pages';

	const pageName = 'About';
</script>

<svelte:head>
	<title>Furniro | {pageName}</title>
</svelte:head>
<Hero name={pageName} />
<div>about</div>
