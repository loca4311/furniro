<script lang="ts">
	import { Hero, Input } from '$lib/components';
	import Container from '$lib/components/Container.svelte';

	const pageName = 'Add Product';

	let isLoading = false;
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
						<div class=" space-y-9">
							<!-- Input here -->
							<Input
								name="productName"
								type="text"
								id="productName"
								label="Product Name"
								placeholder="Product Name"
								disabled={isLoading}
							/>
							<Input
								name="price"
								type="number"
								id="price"
								label="Product price in $:"
								placeholder="Product price"
								errorMessage="error"
								isError
							/>
							<Input
								isTextArea
								name="shortDescription"
								type="text"
								id="shortDesscription"
								label="Short Description"
								placeholder="Short Description"
								max={200}
							/>
						</div>
					</form>
				</div>
			</div>
		</Container>
	</div>
</section>
