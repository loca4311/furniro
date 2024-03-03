<script lang="ts">
	export let variant: 'outline' | 'filled' = 'filled';
	export let size: 'large';
	export let href = '#';
	let extraClasses = '';
	export { extraClasses as class };
</script>

<a
	{href}
	class="
    border border-golden-600 flex items-center justify-center
    {variant === 'filled'
		? `
      bg-golden-600 text-white
      hover:bg-transparent hover:text-golden-600
    `
		: `
      text-golden-600 bg-transparent 
      hover:bg-golden-600 hover:text-white
    `}
    {size === 'large' ? 'font-bold py-6 px-[4.5rem]' : 'font-semibold  py-3 px-8'}
    {extraClasses}
  "
	on:click
	on:mouseleave={(e) => {
		e.currentTarget.blur();
	}}
>
	<span>
		<slot />
	</span>
</a>
