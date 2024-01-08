import { browser } from '$app/environment';
import { derived } from 'svelte/store';
import { init, register, locale } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./lang/en.json'));
register('fr', () => import('./lang/fr.json'));
register('ua', () => import('./lang/ua.json'));

init({
	fallbackLocale: defaultLocale,
	initalLocale: browser ? window.navigator.language : defaultLocale
});

export const isLocalLoaded = derived(locale, ($locale) => typeof $locale === 'string');
