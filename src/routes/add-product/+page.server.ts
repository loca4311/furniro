export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.fromData();

		return {
			success: true
		};
	}
};
