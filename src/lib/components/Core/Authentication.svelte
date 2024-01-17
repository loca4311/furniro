<script lang="ts">
	import { Link } from '$lib/components';
	import { authHandlers } from '$lib/store';
</script>

<div>
	<Link on:click={authHandlers.loginWithGoogle}>Auth with google</Link>
</div>
