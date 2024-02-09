import { addProduct } from '$lib/firebase/database.server';
import validateBook from '$lib/validators/product.vaidator';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = await validateBook(formData);
		if (!data.success) {
			return fail(422, data);
		}

		console.log(data);

		// const productId = await addProduct(data.product, locals.user.id);
		// console.log(productId);
		const productSLug = await addProduct(data.product, locals.user.id);
		console.log(productSLug);

		throw redirect(303, `/products/${productSLug}`);
	}
};
