<script lang="ts">
	import { Container, Link } from '$lib/components';
	import { EPages } from '$lib/types';
	// import homeHeroBg from '$lib/im/hero-background.webp';

	const homeHeroBg = '/img/hero-background.webp';
</script>

<section class="section_home-hero">
	<div class="bg-no-repeat bg-cover bg-center" style="background-image: url({homeHeroBg})">
		<Container>
			<div class="home-hero_component pt-[9.8125rem] pb-[7.25rem] flex flex-col items-end">
				<div
					class="
						home-hero_content bg-golden-500
						pt-[3.875rem] pb-[2.3125rem] pl-[2.5625rem] pr-[2.6875rem]
						rounded-[0.625rem] max-w-[40.1875rem]
						flex flex-col items-start
					"
				>
					<div class="mb-1">
						<span class="text-gray-900 text-base font-semibold tracking-[0.1875rem]">
							New Arrival
						</span>
					</div>
					<div class="mb-[1.0625rem]">
						<h1 class=" text-6xl font-bold text-golden-600">Discover Our New Collection</h1>
					</div>
					<div class="max-w-[34.125rem] mb-[2.875rem]">
						<p class="text-gray-900">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
							ullamcorper mattis.
						</p>
					</div>
					<Link variant={'filled'} size="large" href={EPages.SHOP}>BUY NOW</Link>
				</div>
			</div>
		</Container>
	</div>
</section>
