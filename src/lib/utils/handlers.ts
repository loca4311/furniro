import messagesStore from '$lib/store/messages.store';

export const handlePasswordResetError = (error: Error) => {
	if (error.code === 'auth/user-not-found') {
		messagesStore.showError('The email address provided does not exist.');
	} else if (error.code === 'auth/token-expired') {
		messagesStore.showError('Firebase authentication token expired, please refresh the page.');
	} else if (error.code === 'auth/missing-email') {
		console.log('!');
		// messagesStore.showError('Please write vailid email');
		messagesStore.hide();
	} else {
		console.error('Unexpected error sending password reset email:', error);
		messagesStore.showError('An unexpected error occurred. Please try again later.');
	}
};
