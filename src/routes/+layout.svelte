<script>
	import Navbar from "./Navbar.svelte";
</script>

<div class="container">
	<Navbar />
	<slot />
</div>

<style>
	.container {
		max-width: 98vw;
		margin: 0 auto;
		margin-bottom: 0;
	}
</style>
