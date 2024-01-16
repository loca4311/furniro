<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div
	class="
    flex items-center
  "
>
	<slot />
	<div
		class="
      ml-[10px]
    "
	>
		<h2 class="text-3xl font-semibold text-black">{title}</h2>
		<p class="mt-[0.125rem] lg:text-xl text-gray-700">{description}</p>
	</div>
</div>
