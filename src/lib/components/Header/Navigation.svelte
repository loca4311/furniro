<script lang="ts">
	import { EPages } from '$lib/types';
	import { t } from 'svelte-i18n';
	import { TextLink, NavigationItem } from '$lib/components';
	import { clickOutside } from '$lib/directives/clickOutside';

	let isLoggedIn = true;
	let isOpen = false;
</script>

<div>
	<div
		class="
      absolute top-0 left-0 -z-10 h-full w-full min-h-screen pt-[4.75rem] px-[1.375rem]
      md:left-[50%] md:top-0 md:translate-x-[-50%] md:w-auto md:p-0 md:z-10 md:min-h-[100px] md:flex md:justify-center md:items-center
       {isOpen ? '!translate-x-0' : 'translate-x-[120%]'} 
    "
	>
		<div
			class="
      absolute top-0 left-0 w-full h-full
      bg-black/30
      opacity-0 transition-opacity
      z-1
      md:hidden
      {isOpen ? '!opacity-100 !translate-x-0' : 'opacity-0 translate-x-[120%]'} 
    "
		></div>
		<ul
			class="
      bg-white p-4 ml-auto flex rounded-2xl max-w-[380px]
        flex-col justify-center items-center
        translate-x-[120%] z-50
				text-center
        transition duration-500 ease-in-out
        md:translate-x-0 md:flex-row md:p-0
        {isOpen ? '!translate-x-0' : ''} 
      "
		>
			<NavigationItem>
				<TextLink class="text-golden-600" ariaCurrent="page" href={EPages.HOME}
					>{$t('navigation.home')}</TextLink
				>
			</NavigationItem>
			<NavigationItem>
				<TextLink href={EPages.SHOP}>{$t('navigation.shop')}</TextLink>
			</NavigationItem>
			<NavigationItem>
				<TextLink href={EPages.ABOUT} class="whitespace-nowrap">{$t('navigation.about')}</TextLink>
			</NavigationItem>
			<NavigationItem>
				<TextLink href={EPages.CONTACT}>{$t('navigation.contact')}</TextLink>
			</NavigationItem>
			<!-- LOGGED IN  -->
			{#if isLoggedIn}
				<NavigationItem>
					<TextLink href={EPages.PROFILE}>{$t('navigation.profile')}</TextLink>
				</NavigationItem>
				<NavigationItem>
					<TextLink href={EPages.ADDPRODUCT}>{$t('navigation.addProduct')}</TextLink>
				</NavigationItem>
				<NavigationItem>
					<TextLink>{$t('navigation.logout')}</TextLink>
				</NavigationItem>
			{:else}
				<!-- Not logged In -->
				<NavigationItem>
					<TextLink>{$t('navigation.login')}</TextLink>
				</NavigationItem>
				<NavigationItem>
					<TextLink>{$t('navigation.signUp')}</TextLink>
				</NavigationItem>
			{/if}
		</ul>
	</div>
	<button
		on:click={() => (isOpen = !isOpen)}
		use:clickOutside={() => (isOpen = false)}
		class=" 
      w-[44px] h-[44px]
      rounded-full
    bg-white
      flex items-center justify-center
      z-10
      md:hidden
    "
	>
		<div
			class="
      
        relative z-20 w-6 h-[20px] transform rotate-0 transition duration-50 ease-in-out cursor-pointer
      "
		>
			<span
				class="
         bg-black block absolute w-full h-[3px] rounded-[7px] opacity-1 left-0 transform rotate-0 transition duration-250 ease-in-out origin-left top-0
           {isOpen ? 'rotate-45 translate-y-[0px] translate-x-[4px]' : ''}
         "
			></span>
			<span
				class="
          bg-black block absolute w-full h-[3px] rounded-[7px] opacity-1 left-0 transform rotate-0 transition duration-250 ease-in-out origin-left top-[8px]
          {isOpen ? 'opacity-0' : ''}
          "
			></span>
			<span
				class="bg-black block absolute w-full h-[3px] rounded-[7px] opacity-1 left-0 transform transition duration-250 ease-in-out origin-left top-[17px]
          {isOpen ? '-rotate-45 translate-y-[0px] translate-x-[4px]' : ''}
          "
			></span>
		</div>
	</button>
</div>
