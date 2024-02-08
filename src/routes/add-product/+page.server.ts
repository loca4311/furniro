import { addProduct } from '$lib/firebase/database.server';
import validateBook from '$lib/validators/product.vaidator';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = await validateBook(formData);
		if (!data.success) {
			return fail(422, data);
		}

		const productId = await addProduct(data, locals.user.id);

		throw redirect(303, `/products/${productId}`);
	}
};
