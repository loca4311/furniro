import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.hello = functions.database.ref('/hello').onWrite(event => {
//   // set() returns a promise. We keep the function alive by returning it.
//   return event.data.ref.set('world!').then(() => {
//     console.log('Write succeeded!');
//   });
// });

admin.initializeApp();

// export.addAdminRole =

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const addAdminRole = functions.https.onCall((data, context) => {
	// get user and add custom claim
	return admin
		.auth()
		.getUserByEmail(data.email)
		.then((user) => {
			return admin.auth().setCustomUserClaims(user.uid, {
				admin: true
			});
		})
		.then(() => {
			return {
				message: `Success ${data.email} has been made an admin`
			};
		})
		.catch((err) => {
			return err;
		});
});
