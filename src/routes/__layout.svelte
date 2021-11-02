<script lang="ts">
	import '../index.css';
	import Navbar from '../components/nav.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<div class="dark:bg-black">
	<SvelteToast />
	<Navbar />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
