<script lang="ts">
	import { Container } from '$lib/components';
	import { QualityIcon, WarrantyIcon, ShipingIcon, SupportIcon } from '$lib/assets/icons';
	import AdvantagesItem from './AdvantagesItem.svelte';
</script>

<section>
	<div
		class="
			py-14 bg-[#FAF3EA]
			lg:py-[6.25rem]
		"
	>
		<Container>
			<div
				class="
					grid grid-cols-1 gap-12
					md:grid-cols-2
					xl:grid-cols-4 2xl:-mx-[55px]
				"
			>
				<AdvantagesItem title="High Quality" description="crafted from top materials">
					<QualityIcon />
				</AdvantagesItem>
				<AdvantagesItem title="Warranty Protection" description="Over 2 years">
					<WarrantyIcon />
				</AdvantagesItem>
				<AdvantagesItem title="Free Shipping" description="Order over 150 $">
					<ShipingIcon />
				</AdvantagesItem>
				<AdvantagesItem title="24 / 7 Support" description="Dedicated support">
					<SupportIcon />
				</AdvantagesItem>
			</div>
		</Container>
	</div>
</section>
