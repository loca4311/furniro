import { fail, type Actions, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';

export const actions: Actions = {
	default: async ({ request }) => {
		// SVELTE VERSION
		//	const formData = await request.formData();
		// const user = String(formData.get('user'));
		// const password = String(formData.get('password'));
		// const errors: Record<string, unknown> = {};
		// if (!user || typeof user !== 'string') {
		// 	errors.user = 'required';
		// }
		// if (!password  || typeof password !== 'string') {
		// 	errors.password = 'required';
		// }
		// if (Object.keys(errors).length > 0) {
		// 	const data = {
		// 		data: Object.fromEntries(formData),
		// 		errors
		// 	};
		// 	return fail(400, data);
		// }
		// throw redirect(303, '/todos');
		// ZOD VERSION

		const formData = await request.formData();

		const loginSchema = zfd.formData({
			user: zfd.text(),
			password: zfd.text()
		});

		const result = loginSchema.safeParse(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};

			return fail(400, data);
		}

		throw redirect(303, '/todos');
	}
};
