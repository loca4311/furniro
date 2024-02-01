<script lang="ts">
	import { MultiSelect, Hero, Input, Tiptap } from '$lib/components';
	import { Input as FlowInput, Label, Helper } from 'flowbite-svelte';
	import Container from '$lib/components/Container.svelte';

	const pageName = 'Add Product';

	let isLoading = false;

	let sizesChoises = [
		{ value: 'xs', name: 'XS' },
		{ value: 's', name: 'S' },
		{ value: 'm', name: 'M' },
		{ value: 'l', name: 'L' },
		{ value: 'xl', name: 'XL' },
		{ value: 'xxl', name: 'XXL' },
		{ value: 'XXXL', name: 'XXXL' }
	];

	let selectedSizes = ['m', 'l'];

	let categories = [
		{ value: 'sofas', name: 'Sofas' },
		{ value: 'chairs', name: 'Chairs' },
		{ value: 'tables', name: 'Tables' },
		{ value: 'desks', name: 'Desks' },
		{ value: 'lighting', name: 'Lighting' },
		{ value: 'decoration', name: 'Decoration' },
		{ value: 'accessories', name: 'Accessories' },
		{ value: 'outdoor', name: 'Outdoor' },
		{ value: 'kitchenware', name: 'Kitchenware' }
	];

	let selectedCategories: string[] = [];

	let tags = [
		{ value: 'Home', name: 'Home' },
		{ value: 'Sofa', name: 'Sofa' },
		{ value: 'Bed', name: 'Bed' },
		{ value: 'Dining', name: 'Dining' },
		{ value: 'Table', name: 'Table' },
		{ value: 'Desk', name: 'Desk' },
		{ value: 'Light', name: 'Light' },
		{ value: 'Round', name: 'Round' },
		{ value: 'Decoration', name: 'Decoration' },
		{ value: 'Accessories', name: 'Accessories' },
		{ value: 'Outdoor', name: 'Outdoor' },
		{ value: 'Indoor', name: 'Indoor' },
		{ value: 'Kitchenware', name: 'Kitcheware' }
	];

	let selectedTags: string[] = [];

	let colors = [
		{ value: '#4b0082', name: 'Indigo', color: 'indigo' },
		{ value: '#ffffff', name: 'White', color: 'white' },
		{ value: '#000000', name: 'Black', color: 'dark' },
		{ value: '#ff0000', name: 'Red', color: 'red' },
		{ value: '#00ff00', name: 'Green', color: 'green' },
		{ value: '#0000ff', name: 'Blue', color: 'blue' },
		{ value: '#8c534b', name: 'Grey', color: 'dark' },
		{ value: '#e67d2f', name: 'Orange', color: 'orange' },
		{ value: '#ffff00', name: 'Yellow', color: 'yellow' }
	];

	let selectedColors: string[] = ['#ff0000', '#00ff00', '#0000ff'];
</script>

<svele:head>
	<title>{pageName} | Futnio</title>
</svele:head>
<Hero name={pageName} />
<section class="add-product">
	<div class="relative">
		<Container>
			<div class="pt-16 pb-14">
				<div
					class="
						pt-5 px-5 pb-5
            lg:pt-9 lg:px-20 lg:pb-16
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
								errorMessage="Please add the product name"
								disabled={isLoading}
							/>
							<Input
								name="price"
								type="number"
								id="price"
								label="Product price in $:"
								placeholder="Product price"
								errorMessage="Please add the product price"
								isError
								required
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

							<MultiSelect
								id="size"
								label="Pick the sizes:"
								name="size"
								choises={sizesChoises}
								selected={selectedSizes}
							/>
							<Input
								name="sku"
								type="text"
								id="sku"
								label="SKU:"
								placeholder="AA000"
								errorMessage="Please add SKU"
								required
							/>
							<MultiSelect
								id="category"
								name="category"
								label="Choose categories:"
								choises={categories}
								selected={selectedCategories}
							/>
							<MultiSelect
								id="tags"
								name="tags"
								label="Choose tags:"
								choises={tags}
								selected={selectedTags}
							/>
							<MultiSelect
								id="colors"
								name="colors"
								label="Choose colors:"
								choises={colors}
								selected={selectedColors}
							/>
							<Tiptap />
						</div>
					</form>
				</div>
			</div>
		</Container>
	</div>
</section>
