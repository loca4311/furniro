<script lang="ts">
	export let href = '#';
	let extraClasses = '';
	export { extraClasses as class };
</script>

<a {href} class="w-full block py-2 font-medium hover:text-golden-600 {extraClasses}">
	<slot />
</a>
