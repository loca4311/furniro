<script lang="ts">
	import { Hero, ProductForm } from '$lib/components';

	import Container from '$lib/components/Container.svelte';

	const pageName = 'Add Product';
</script>

<svele:head>
	<title>{pageName} | Futnio</title>
</svele:head>
<Hero name={pageName} />
<section class="add-product">
	<div class="relative">
		<Container>
			<div class="pt-16 pb-14">
				<ProductForm />
			</div>
		</Container>
	</div>
</section>
