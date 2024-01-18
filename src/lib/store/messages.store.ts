import { writable } from 'svelte/store';
import { PUBLIC_ERROR_MESSAGE } from '$env/static/public';

const messagesStore = writable({ show: false, message: '', type: 'errror' });

export default {
	subscribe: messagesStore.subscribe,
	showError: (message = PUBLIC_ERROR_MESSAGE) => {
		messagesStore.set({ show: true, message, type: 'error' });
	},
	showSuccess: (message) => {
		messagesStore.set({ show: true, message, type: 'success' });
	},
	hide: () => {
		messagesStore.set({ show: false, message: '', type: 'success' });
	}
};
