<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronRightIcon } from '$lib/assets/icons';
	import TextLink from './Core/TextLink.svelte';

	let crumbs: Array<{ label: string; href: string }> = [];

	$: {
		// Remove zero-lenght tokens.
		const tokens = $page.url.pathname.split('/').filter((token) => token !== '');

		let tokenPath = '';

		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			t = t.charAt(0).toUpperCase() + t.slice(1).split('-').join(' ');

			return {
				label: $page.data.label || t,
				href: tokenPath
			};
		});

		crumbs.unshift({ label: 'Home', href: '/' });
	}
</script>

<div
	class="
    breadcrumbs
    flex justify-center items-center
  "
>
	{#each crumbs as crumb, i}
		{#if i == crumbs.length - 1}
			<span class="text-black font-light whitespace-nowrap">
				{crumb.label}
			</span>
		{:else}
			<TextLink href={crumb.href} class="block w-auto mr-[0.375rem] text-black">
				{crumb.label}
			</TextLink>
			<ChevronRightIcon class="min-w-5 h-5 mr-[0.375rem]" />
		{/if}
	{/each}
</div>
