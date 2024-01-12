<script lang="ts">
	import { Header, Footer } from '$lib/components';
	import '../app.css';
</script>

<div class="relative flex flex-col min-h-screen">
	<Header />
	<main class="pt-[100px]">
		<slot />
	</main>
	<Footer />
</div>
