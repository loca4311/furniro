<script lang="ts">
	import { date, number, t, locale, locales, dictionary } from 'svelte-i18n';
	import { isLocalLoaded } from '$lib/i18n';
	import { Hero, OurProducts, Range, Rooms, ShareSetup } from '$lib/pages';

	let lang: string = 'en';

	export let data;

	const count = data.count;

	function handleLocaleChange(event: Event) {
		event.preventDefault();

		const target = event.target as HTMLInputElement;

		lang = target.value;
		$locale = lang;
	}
</script>

<svelte:head>
	<title>Futnio</title>
</svelte:head>

{#if $isLocalLoaded}
	<Hero />
	<div class="text-center">
		Number of users: {count}
	</div>
	<Range />
	<OurProducts />
	<Rooms />
	<ShareSetup />
	<select name="lang" id="lang" {lang} on:change={handleLocaleChange}>
		{#each $locales as locale, i}
			<option value={locale}>{locale.toUpperCase()}</option>
		{/each}
	</select>
{:else}
	<div class="container__content">Locale initializing...</div>
{/if}
