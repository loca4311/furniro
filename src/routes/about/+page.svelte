<script lang="ts">
	import { Hero } from '$lib/components';

	const pageName = 'About';
</script>

<svelte:head>
	<title>Furniro | {pageName}</title>
</svelte:head>
<Hero name={pageName} />
