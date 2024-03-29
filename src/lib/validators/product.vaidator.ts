// /* eslint-disable @typescript-eslint/no-var-requires */
// import { value } from '$lib/components/Core/Input/Input.svelte';
import yup from 'yup';
// import { formData } from 'zod-form-data';

export default async function validate(formData) {
	const schema = yup.object({
		name: yup.string().required().min(4).max(160),
		price: yup.number().required().positive('Price must be a positive number'),
		description: yup.string().required().min(10).max(300),
		sku: yup.string().required().min(4).max(10),
		image: yup
			.mixed()
			.required()
			.test('fileType', 'The file must be an image', (value) => {
				if (value && value.type) {
					return ['image/png', 'image/jpeg'].includes(value.type);
				}
				return true;
			})
			.test('fileSize', 'The file must be under 4 MB.', (value) => {
				if (value && value.size) {
					return value.size < 4_000_000;
				}
				return true;
			})
	});

	const data = {
		name: formData.get('productName'),
		price: parseFloat(formData.get('price')) || null,
		description: formData.get('shortDescription'),
		sku: formData.get('sku'),
		image: emptyFileIsNull(formData.get('main_picture')),
		sizes: formData.getAll('sizes'),
		categories: formData.getAll('categories'),
		tags: formData.getAll('tags') ?? [],
		colors: formData.getAll('colors') ?? [],
		content: formData.get('content')
	};

	try {
		await schema.validate(data, { abortEarly: false });

		return { success: true, product: data };
	} catch (err) {
		const errors = err.inner.reduce((agg, e) => {
			if (!agg['error_' + e.path]) {
				agg['error_' + e.path] = e.message;
			}
			return agg;
		}, {});

		delete data.image;

		return { ...errors, ...data, success: false };
	}
}

function emptyFileIsNull(file) {
	if (file.size === 0) {
		return null;
	}

	return file;
}
