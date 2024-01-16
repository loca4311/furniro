<script lang="ts">
	import { Container, Breadcrumbs } from '$lib/components';

	export let name: string;

	const heroBg = '/img/main-hero-background.png';
</script>

<section class="hero">
	<div
		class="
      bg-no-repeat bg-cover bg-center
    "
		style="background-image: url({heroBg})"
	>
		<Container>
			<div
				class="
          pt-[7.5625rem] pb-[6.1875rem]
          flex flex-col items-center
        "
			>
				<h1>
					{name}
				</h1>
				<Breadcrumbs></Breadcrumbs>
			</div>
		</Container>
	</div>
</section>
