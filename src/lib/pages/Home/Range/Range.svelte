<script lang="ts">
	import { Container } from '$lib/components';
	import RangeItem from './RangeItem.svelte';
	import { type Room } from '$lib/types';

	const rooms: Room[] = [
		{
			id: 0,
			name: 'Dining',
			image: '/img/dining.jpg',
			link: '/shop'
		},
		{
			id: 1,
			name: 'Living',
			image: '/img/living.jpg',
			link: '/shop'
		},
		{
			id: 2,
			name: 'Bedroom',
			image: '/img/bedroom.jpg',
			link: '/shop'
		}
	];
</script>

<section>
	<div
		class="
      relative
    "
	>
		<Container>
			<div
				class="
          pt-[3.25rem] pb-7
        "
			>
				<div
					class="
            mb-[3.875rem]
            flex flex-col items-center
          "
				>
					<h1
						class="
              text-3xl text-gray-900 font-bold
              lg:text-4xl
            "
					>
						Browse The Range
					</h1>
					<p
						class="
              text-base text-gray-800 text-center
              lg:text-xl
            "
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div
					class="
					  -mx-5
					"
				>
					<div
						class="
							flex overflow-scroll space-x-5 px-5 no-scrollbar
							lg:justify-center
						"
					>
						{#each rooms as room}
							<RangeItem {room} />
						{/each}
					</div>
				</div>
			</div>
		</Container>
	</div>
</section>
