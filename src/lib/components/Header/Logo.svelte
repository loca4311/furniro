<script>
	import { EPages } from '$lib/types';
	import logo from '$lib/assets/icons/logo.png';
</script>

<a href={EPages.HOME} class="logo flex items-center">
	<img src={logo} alt="" />
	<span
		class="
					hidden lg:block
					montserrat text-[2.125rem] font-bold leading-[2.75rem]
					ml-[0.3125rem]
				">Furniro</span
	>
</a>
