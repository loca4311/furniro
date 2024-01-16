<script lang="ts">
	export let color = '#000000';
	export let size = 20;
	let extraClasses = '';
	export { extraClasses as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 20 20"
	fill="none"
	class={extraClasses}
>
	<path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill={color} />
</svg>
