<script lang="ts">
	import { Hero, ProductForm, Container } from '$lib/components';
	import type { Product } from '$lib/types';

	export let form: Product;

	console.log(form);

	const pageName = 'Add Product';
</script>

<svele:head>
	<title>{pageName} | Furnio</title>
</svele:head>
<Hero name={pageName} />
<section class="add-product">
	<div class="relative">
		<Container>
			<div class="pt-16 pb-14">
				{#if form && form.success}
					<h2>Form Success</h2>
				{:else}
					<ProductForm {form} />
				{/if}
			</div>
		</Container>
	</div>
</section>
