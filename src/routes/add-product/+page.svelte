<script lang="ts">
	import { Hero, Input } from '$lib/components';
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
			<div class=" pt-16 pb-14">
				<div
					class="
            pt-9 px-20 pb-16
            max-w-screen-md mx-auto
            border border-slate-300 rounded-lg

          "
				>
					<div class="mb-9">
						<h2 class="font-semibold text-4xl text-black">Product Details</h2>
					</div>
					<form method="POST">
						<div class=" space-x-9">
							<!-- Input here -->
							<Input />
						</div>
					</form>
				</div>
			</div>
		</Container>
	</div>
</section>
