import { db } from '$lib/firebase/firebase.server';
import { serverTimestamp } from 'firebase/firestore';

export async function addProduct(product, userId) {
	// save to the firestore database without picture
	const productCollection = db.collection('products');

	const productRef = productCollection.add({
		name: product.name,
		price: product.price,
		description: product.description,
		sku: product.sku,
		sizes: product.sizes || [],
		categories: product.categories || [],
		tags: product.tags || [],
		colors: product.colors || [],
		content: product.content,
		user_id: userId,
		created_at: serverTimestamp(),
		likes: 0
	});
	// save the picture
	// update the doc in firestor e with the picture urls
	// return the product id
}
