<script lang="ts">
	import { Hero, Products } from '$lib/components';
	import { Advantages } from '$lib/pages';

	const pageName = 'Shop';
</script>

<svelte:head>
	<title>Futnio | {pageName}</title>
</svelte:head>
<Hero name={pageName} />
<Products />
<Advantages />
