<script lang="ts">
	import { page } from '$app/stores';
	import TextLink from './Core/TextLink.svelte';

	let crumbs: Array<{ label: string; href: string }> = [];

	$: {
		// Remove zero-lenght tokens.
		const tokens = $page.url.pathname.split('/').filter((token) => token !== '');

		let tokenPath = '';

		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			t = t.charAt(0).toUpperCase() + t.slice(1);

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
			<span>
				{crumb.label}
			</span>
		{:else}
			<TextLink href={crumb.href} class="block w-auto mr-[0.375rem]">
				{crumb.label}
			</TextLink>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				class="mr-[0.375rem]"
			>
				<path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
			</svg>
		{/if}
	{/each}
</div>
