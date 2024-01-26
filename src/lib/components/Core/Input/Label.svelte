<script lang="ts">
	export let label: string;
	export let isError = true;
	export let disabled = false;
</script>

<span
	class="label font-normal text-[#ABABAB] leading-4"
	class:cursor-not-allowed={disabled}
	class:!text-[#C4C4C4]={disabled}
	class:!text-surface-700={isError}
>
	{label}
</span>
