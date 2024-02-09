import { db } from '$lib/firebase/firebase.server';
// import { serverTimestamp } from 'firebase/firestore';
// import { firestore } from 'firebase-admin';
import firebaseAdmin from 'firebase-admin';
const { firestore } = firebaseAdmin;
import { saveFileToBucket } from './firestorage.server';

export async function addProduct(product, userId) {
	// save to the firestore database without picture
	const productCollection = db.collection('products');

	const productRef = await productCollection.add({
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
		created_at: firestore.Timestamp.now().seconds,
		likes: 0
	});
	// save the picture

	console.log(product.image);

	const imageUrl = await saveFileToBucket(product.image, `${userId}/${productRef.id}/image`);
	// update the doc in firestor e with the picture urls
	await productRef.update({ image: imageUrl });
	// return the product id
	return productRef.id;
}
