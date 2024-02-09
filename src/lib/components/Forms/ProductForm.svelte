<script lang="ts">
	import { MultiSelect, Input, Tiptap } from '$lib/components';
	import ProductContent from '$lib/store/store';
	import { sizesChoises, categories, tags, colors } from './dropdownParams';

	export let form;
	$: content = $ProductContent;

	let isLoading = false;

	let selectedSizes = ['m', 'l'];

	let selectedCategories: string[] = ['sofas', 'desks'];

	let selectedTags: string[] = ['Home', 'Sofa'];

	let selectedColors: string[] = ['#ff0000', '#00ff00', '#0000ff'];

	ProductContent.set(form?.content ?? '');
</script>

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
	<form enctype="multipart/form-data" method="POST">
		<div class=" space-y-9">
			<!-- Input here -->
			<Input
				name="productName"
				type="text"
				id="productName"
				label="Product Name"
				placeholder="Product Name"
				disabled={isLoading}
				value={form?.name || ''}
				isError={form?.error_name}
				errorMessage={form?.error_name}
			/>
			<div class="mb-3">
				<label for="main_picture" class="form-label">Main Book Picture</label>
				<input
					class="form-control form-control-lg"
					id="main_picture"
					accept="image/*"
					name="main_picture"
					type="file"
					value={form?.image || ''}
				/>
				{#if form?.error_image}
					<span class=" mt-0.5 font-light text-red-500">{form?.error_image}</span>
				{/if}
			</div>
			<Input
				name="price"
				type="number"
				id="price"
				label="Product price in $:"
				placeholder="Product price"
				value={form?.price || ''}
				isError={form?.error_price}
				errorMessage={form?.error_price}
			/>
			<Input
				isTextArea
				name="shortDescription"
				type="text"
				id="shortDesscription"
				label="Short Description"
				placeholder="Short Description"
				max={200}
				value={form?.description || ''}
				isError={form?.error_description}
				errorMessage={form?.error_description}
			/>

			<MultiSelect
				id="sizes"
				label="Pick the sizes:"
				name="sizes"
				choises={sizesChoises}
				selected={form?.sizes ?? selectedSizes}
			/>
			<Input
				name="sku"
				type="text"
				id="sku"
				label="SKU:"
				placeholder="AA000"
				value={form?.sku || ''}
				isError={form?.error_sku}
				errorMessage={form?.error_sku}
			/>
			<MultiSelect
				id="category"
				name="categories"
				label="Choose categories:"
				choises={categories}
				selected={form?.categories ?? selectedCategories}
			/>
			<MultiSelect
				id="tags"
				name="tags"
				label="Choose tags:"
				choises={tags}
				selected={form?.tags ?? selectedTags}
			/>
			<MultiSelect
				id="colors"
				name="colors"
				label="Choose colors:"
				choises={colors}
				selected={form?.colors ?? selectedColors}
			/>
			<Tiptap />

			<input type="text" name="content" value={content} />
			<button type="submit" class="btn btn-primary w-100"> Submit </button>
		</div>
	</form>
</div>
