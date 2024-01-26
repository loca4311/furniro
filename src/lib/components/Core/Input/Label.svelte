<script lang="ts">
	export let label: string;
	export let isError = true;
	export let disabled = false;
</script>

<span
	class=" text-base font-normal text-black mb-[1.375rem]"
	class:cursor-not-allowed={disabled}
	class:!text-[#C4C4C4]={disabled}
	class:!text-surface-700={isError}
>
	{label}
</span>
