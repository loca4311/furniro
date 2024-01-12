<script lang="ts">
	export let href: string;
	let extraClasses = '';
	export { extraClasses as class };
</script>

<li
	class="
  w-full
  md:px-4 lg:px-8 xl:px-[2.3438rem]
"
>
	<a {href} class="w-full block text-center py-2 hover:text-golden-600 {extraClasses}">
		<slot />
	</a>
</li>
