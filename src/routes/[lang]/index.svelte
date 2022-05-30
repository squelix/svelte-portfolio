<script lang="ts">
	import SvgIcon from '$lib/SvgIcon.svelte';
	import Facebook from '$icons/facebook.svg?raw';
	import { name } from '$stores/profile';
</script>

<h1>Welcome to {$name} Portfolio</h1>

<span>
	<SvgIcon data={Facebook} />
</span>
