<script>
	import { Hero } from '$lib/components';
	import { Advantages } from '$lib/pages';

	const name = 'Shop';
</script>

<svelte:head>
	<title>Futnio | {name}</title>
</svelte:head>
<Hero {name} />
<Advantages />
