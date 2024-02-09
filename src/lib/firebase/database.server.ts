import { db } from '$lib/firebase/firebase.server';
import firebaseAdmin from 'firebase-admin';
const { firestore } = firebaseAdmin;
import { saveFileToBucket } from './firestorage.server';
import { v4 as uuidv4 } from 'uuid';

export async function addProduct(product, userId) {
	// save to the firestore database without picture
	const productCollection = db.collection('products');

	const slug = await generateUniqueSlug(product.name);

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
		likes: 0,
		rating: 0,
		slug: slug
	});

	// save the picture
	const imageUrl = await saveFileToBucket(product.image, `${userId}/${productRef.id}/image`);

	// update the doc in firestor e with the picture urls
	await productRef.update({ image: imageUrl });

	// return the product id
	// return productRef.id;
	// return the product slug
	return slug;
}

async function generateUniqueSlug(name) {
	// Convert the name to a URL-friendly slug
	const slug = name.toLowerCase().replace(/\s+/g, '-');

	// Check if the generated slug already exists in the database
	// If it exists, append a random string to make it unique
	// This is to ensure uniqueness in case of duplicate product names
	const isUnique = async (slug) => {
		const snapshot = await db.collection('products').where('slug', '==', slug).get();
		return snapshot.empty;
	};

	let suffix = '';
	let unique = false;

	while (!unique) {
		if (await isUnique(slug + suffix)) {
			unique = true;
		} else {
			suffix = `-${uuidv4().substr(0, 8)}`; // Append a random string
		}
	}

	return slug + suffix;
}
