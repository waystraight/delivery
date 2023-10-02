<script>
	import { onMount } from "svelte";

	let map;

	const isGoogleMapsLoaded = () =>
		typeof google !== "undefined" && typeof google.maps !== "undefined";

	onMount(() => {
		const checkAPIInterval = setInterval(() => {
			if (isGoogleMapsLoaded()) {
				clearInterval(checkAPIInterval);
				map = new google.maps.Map(document.getElementById("map"), {
					center: { lat: 50.450001, lng: 30.523333 },
					zoom: 12,
				});
			}
		}, 100);
	});
</script>

<div class="map" id="map" style="width: 100%; height: 400px;" />

<style>
	.map {
		margin-bottom: 15px;
	}
</style>
