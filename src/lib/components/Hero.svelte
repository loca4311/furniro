<script lang="ts">
	import { Container, Breadcrumbs } from '$lib/components';

	export let name: string;

	const heroBg = '/img/main-hero-background.png';
</script>

<section class="hero">
	<div
		class="
      bg-no-repeat bg-cover bg-center
      relative backdrop-blur-[3px]
    "
		style="background-image: url({heroBg})"
	>
		<div class=" absolute top-0 left-0 w-full h-full backdrop-blur-[3px] bg-white/30"></div>
		<Container>
			<div
				class="
          relative z-10
          pt-[4.5625rem] pb-[3.1875rem]
          flex flex-col items-center
          lg:pt-[7.5625rem] lg:pb-[6.1875rem]
        "
			>
				<div>
					<h1
						class="
             h1
          "
					>
						{name}
					</h1>
				</div>

				<Breadcrumbs />
			</div>
		</Container>
	</div>
</section>
