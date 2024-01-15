<script lang="ts">
	import { date, number, t, locale, locales, dictionary } from 'svelte-i18n';
	import { isLocalLoaded } from '$lib/i18n';
	import { Hero, OurProducts, Range, Rooms, ShareSetup } from '$lib/pages';

	let lang: string = 'en';
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
	<Range />
	<OurProducts />
	<Rooms />
	<ShareSetup />
	<select name="lang" id="lang" {lang} on:change={handleLocaleChange}>
		{#each $locales as locale, i}
			<option value={locale}>{locale.toUpperCase()}</option>
		{/each}
	</select>
	<!-- <h1 class=" text-green-400">{$t('heading')}</h1>
	
		<p>
			{$t('body_text', {
				values: {
					download: $number(30242),
					date: $date(Date.UTC(2023, 6, 14, 0, 0, 0, 0), {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})
				}
			})}
		</p>
		<div>
			<span>{$t('awards', { values: { n: 1 } })}</span>
		</div> -->
{:else}
	<div class="container__content">Locale initializing...</div>
{/if}
