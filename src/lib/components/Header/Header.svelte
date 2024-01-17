<script lang="ts">
	import { Cart, Container, Logo, Navigation, UserInfo } from '$lib/components';
</script>

<header class="fixed top-0 left-0 w-full z-[1000] text-black bg-white">
	<Container>
		<navbar class="flex items-center justify-between h-[60px] md:h-[100px]">
			<Logo />
			<Cart />
			<UserInfo />
			<Navigation />
		</navbar>
	</Container>
</header>
