<script lang="ts">
	import { isLocalLoaded } from '$lib/i18n';
	import { date, number, t, locale, locales, dictionary } from 'svelte-i18n';

	let value: string = 'en';
	function handleLocaleChange(event: Event) {
		event.preventDefault();

		const target = event.target as HTMLInputElement;

		value = target.value;
		$locale = value;
	}
</script>

<div class="container">
	{#if $isLocalLoaded}
		<h1 class=" text-green-400">{$t('heading')}</h1>
		<span>{$t('toggle_label')}</span>
		<select name="lang" id="lang" {value} on:change={handleLocaleChange}>
			{#each $locales as locale, i}
				<option value={locale}>{locale.toUpperCase()}</option>
			{/each}
		</select>
		<button>{$t('button_label')}</button>
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
		</div>
	{:else}
		<div class="container__content">Locale initializing...</div>
	{/if}
</div>
