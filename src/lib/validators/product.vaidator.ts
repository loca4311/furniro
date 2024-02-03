// /* eslint-disable @typescript-eslint/no-var-requires */
import { value } from '$lib/components/Core/Input/Input.svelte';
import yup from 'yup';
import { formData } from 'zod-form-data';

export default async function validate(formData) {
	const schema = yup.object({
		name: yup.string().required().min(4).max(160),
		price: yup.number().required().positive('Prise must be a positive number'),
		description: yup.string().required().min(10).max(300),
		sku: yup.string().required().min(4).max(10),
		image: yup
			.mixed()
			.required()
			.test('fileSize', 'File type must be smaller than 5MB', (value) => {
				if (value && value.size) {
					return value.size <= 5 * 1024 * 1024;
				}
				return true;
			})
			.test('fileType', 'The file must be an Image', (value) => {
				if (value && value.type) {
					const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
					return allowedTypes.includes(value.type);
				}
				return true;
			})
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// content: yup.string().custom((value) => {
		// 	if (!value) {
		// 		return 'Content is required';
		// 	}

		// 	// eslint-disable-next-line @typescript-eslint/no-var-requires
		// 	const { createEditor } = require('@tiptap/core');
		// 	// eslint-disable-next-line @typescript-eslint/no-var-requires
		// 	const { default: Document } = require('@tiptap/extension-document');
		// 	// eslint-disable-next-line @typescript-eslint/no-var-requires
		// 	const { default: Paragraph } = require('@tiptap/extension-paragraph');
		// 	// eslint-disable-next-line @typescript-eslint/no-var-requires
		// 	const { default: Text } = require('@tiptap/extension-text');

		// 	const editor = createEditor({
		// 		extensions: [Document, Paragraph, Text]
		// 	});

		// 	const document = editor.createDocument({ content: value });

		// 	if (document.textContent.length < 10) {
		// 		return 'Content should have at least 10 characters';
		// 	}

		// 	return true;
		// })
	});

	const data = {
		name: formData.get('productName'),
		price: parseFloat(formData.get('price')) || null,
		description: formData.get('shortDescription'),
		sku: formData.get('sku'),
		image: formData.get('productImage'),
		sizes: formData.get('sizes') ?? [],
		categories: formData.get('categories') ?? [],
		tags: formData.get('tags') ?? [],
		colors: formData.get('colors') ?? [],
		content: formData.get('textContent')
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
