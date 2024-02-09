import { PUBLIC_FIRBASE_STORAGE_BUCKET } from '$env/static/public';
import { storage } from '$lib/firebase/firebase.server';
import { tmpdir } from 'os';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

/**
 * @param  {string} destination
 * @param {File} file
 *
 */

export async function saveFileToBucket(file, destination) {
	const filePath = await saveFileToDisk(file);
	const uploadResult = await storage
		.bucket(PUBLIC_FIRBASE_STORAGE_BUCKET)
		.upload(filePath, { destination, public: true });

	return uploadResult[0].publicUrl();
}

async function saveFileToDisk(file) {
	const arrayBuffer = await file.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);
	const filePath = path.join(tmpdir(), uuidv4());

	fs.writeFileSync(filePath, buffer, 'base64');

	return filePath;
}
