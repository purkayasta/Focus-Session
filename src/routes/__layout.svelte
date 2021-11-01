<script>
	import '../index.css';
	import Navbar from '../components/nav.svelte';
</script>

<div class="dark:bg-black">
	<Navbar />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
