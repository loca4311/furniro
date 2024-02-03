<script lang="ts">
	import { Hero, ProductForm, Container } from '$lib/components';

	export let form;

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
				{#if form && form.success}
					<h2>Form Success</h2>
				{:else}
					<ProductForm {form} />
				{/if}
			</div>
		</Container>
	</div>
</section>
