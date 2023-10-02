<script>
	import { cart } from "./cartStore";
	import Form from "./Form.svelte";
	import GoogleMaps from "./GoogleMaps.svelte";

	export const minusItem = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				if (product.quantity > 1) {
					product.quantity -= 1;
					$cart = $cart;
				} else {
					removeFromCart(item);
				}
				return;
			}
		}
	};
	export const plusItem = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity += 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, product];
	};
	export const removeFromCart = (product) => {
		$cart = $cart.filter((item) => item.id !== product.id);
	};

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<div class="order-details">
	<div class="shipping-adress">
		<div class="gmap">
			<GoogleMaps />
		</div>
		<div class="form">
			<Form />
		</div>
	</div>
	<div class="cart">
		<div class="cart-list">
			{#each $cart as item}
				{#if item.quantity > 0}
					<div class="cart-item">
						<button
							on:click={() => removeFromCart(item)}
							class="remove-button">×</button
						>
						<p>{item.name}</p>
						<img class="item-img" src={item.img} alt="item.name" />
						<div>
							<button on:click={() => minusItem(item)}>-</button>
							{item.quantity}
							<button on:click={() => plusItem(item)}>+</button>
						</div>
						<p>{item.price * item.quantity}₴</p>
					</div>
				{/if}
			{/each}
		</div>
		<div class="total">
			<h4>
				Загалом: {total}₴
			</h4>
		</div>
	</div>
</div>

<style>
	.order-details {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 2em;
		max-width: 80vw;
		margin: 0 auto;
	}
	.shipping-adress {
		grid-column: span 4;
	}
	.cart {
		grid-column: span 8;
	}
	.cart-list {
		border: 1px solid black;
		/* padding: 0 25px; */
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 40vw;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.cart-item {
		margin: 10px 10px;
		display: grid;
		/* justify-content: space-between; */
		grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
		flex: 1;
		align-items: center;
		width: 100%;
	}
	.item-img {
		width: 75px;
		height: 75px;
	}
	.total {
		text-align: right;
		grid-column: span 3;
		align-self: end;
	}
	.remove-button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		font-size: 1.2em;
		color: #333;
		padding: 0;
	}

	.map-page {
		width: 100%;
		height: 100%;
	}
</style>
