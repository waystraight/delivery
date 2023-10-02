<script>
	import { cart, adress } from "./cartStore";

	const chekOut = () => {
		alert(JSON.stringify($cart));
		alert(JSON.stringify($adress));
	};
</script>

<div class="shipping-adress">
	<div>
		<p>ФІО</p>
		<input bind:value={$adress.name} />

		<p>Пошта</p>
		<input bind:value={$adress.email} />

		<p>Номер телефону</p>
		<input bind:value={$adress.phone} />

		<p>Місто</p>
		<textarea bind:value={$adress.city} name="" id="" cols="30" rows="6" />

		<p>Вулиця</p>
		<input bind:value={$adress.street} />
		<div>
			<button on:click={chekOut}>Замовити</button>
		</div>
	</div>
	<div class="current-adress">
		<p>{$adress.name}</p>
		<p>{$adress.email}</p>
		<p>{$adress.phone}</p>
		<p>{$adress.city}</p>
		<p>{$adress.street}</p>
	</div>
</div>

<style>
	.shipping-adress {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1em;
	}
	.current-adress {
		padding: 3em;
		border: 1px dashed black;
	}
</style>
