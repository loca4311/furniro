<script>
	import { Container, FooterList, SubscribeForm } from '$lib/components';
	import { EPages } from '$lib/types';
	import TextLink from '../Core/TextLink.svelte';
</script>

<footer class="bg-white mt-auto border border-[rgba(0, 0, 0, 0.17)]">
	<div>
		<Container>
			<div class="footer_top py-12">
				<div class="flex flex-col lg:flex-row lg:justify-between">
					<div class="lg:mr-4">
						<div class="text-black text-3xl font-semibold mb-5 lg:mb-[3.125rem]">
							<span>Firniro.</span>
						</div>
						<p class="max-w-[17.8125rem] text-gray-600">
							400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
						</p>
					</div>

					<div
						class="
							grid grid-cols-1 gap-8 text-black my-14
							sm:grid-cols-2 lg:grid-cols-2 lg:ml-auto lg:my-0
						"
					>
						<FooterList title="Links">
							<li>
								<TextLink href={EPages.HOME}>Home</TextLink>
							</li>
							<li>
								<TextLink href={EPages.SHOP}>Shop</TextLink>
							</li>
							<li>
								<TextLink href={EPages.ABOUT}>About</TextLink>
							</li>
							<li>
								<TextLink href={EPages.CONTACT}>Contact</TextLink>
							</li>
						</FooterList>
						<FooterList title="Help">
							<li>
								<TextLink>Payment Options</TextLink>
							</li>

							<li>
								<TextLink>Returns</TextLink>
							</li>

							<li>
								<TextLink>Privacy Policies</TextLink>
							</li>
						</FooterList>
					</div>
					<div class="max-w-[17.8125rem] lg:ml-[4.5rem]">
						<p class="font-medium text-gray-600 mb-5 lg:mb-[3.4375rem]">Newsletter</p>
						<SubscribeForm />
					</div>
				</div>
			</div>
			<div class="footer_bottom border-t border-t-[#D9D9D9] pt-[2.1875rem] pb-[2.375rem]">
				<span class="text-black">2023 furino. All rights reverved</span>
			</div>
		</Container>
	</div>
</footer>
