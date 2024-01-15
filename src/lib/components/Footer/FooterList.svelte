<script lang="ts">
	export let title: string = '';
</script>

<div>
	<p class="font-medium text-gray-600 mb-5 lg:mb-[3.4375rem]">{title}</p>
	<ul class="space-y-4">
		<slot />
	</ul>
</div>
