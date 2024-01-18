<script lang="ts">
	import { Container, Hero, LoginWithGoogle } from '$lib/components';

	const pageName = 'Login';
</script>

<svelte:head>
	<title>Furniro | {pageName}</title>
</svelte:head>

<Hero name={pageName} />
<div class="py-10 text-black">
	<Container>
		<div>
			<LoginWithGoogle />
		</div>
	</Container>
</div>
