<script lang="ts">
	import { type Room } from '$lib/types';
	import { TextLink } from '$lib/components';
	import Link from '$lib/components/Core/Link.svelte';

	export let room: Room;
</script>

<div
	class="
    flex flex-col items-center
    group
  "
>
	<a
		href={room.link ?? '#'}
		class="
      rounded-[0.625rem]
      overflow-hidden
      w-[18.75rem] h-[25rem]
      lg:w-[19.75rem] lg:h-[26rem]
      xl:w-[23.75rem] xl:h-[30rem]
    "
	>
		<img
			src={room.image}
			alt={room.name}
			class="
          w-full h-full
          object-cover
          transition-all
          group-hover:scale-110
        "
		/>
	</a>
	<TextLink
		href={room.link ?? '#'}
		class="
      text-3xl text-gray-900 text-center
      mt-5
      lg:mt-[1.875rem]
    group-hover:text-golden-600
    "
	>
		{room.name}
	</TextLink>
</div>
