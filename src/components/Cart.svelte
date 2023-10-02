<script>
	import { cart } from "./cartStore";

	const minusItem = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity -= 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, product];
	};
	const plusItem = (product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity += 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, product];
	};

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
</script>

<div class="cart-list">
	{#each $cart as item}
		{#if item.quantity > 0}
			<div class="cart-item">
				<img width="50" src={item.image} alt="item.name" />
				<div>
					<button on:click={() => minusItem(item)}>-</button>
					{item.quantity}
					<button on:click={() => plusItem(item)}>+</button>
				</div>
				<p>{item.price * item.quantity}₴</p>
			</div>
		{/if}
	{/each}
	<div class="total">
		<h4>
			Загалом: {total}₴
		</h4>
	</div>
</div>

<style>
	.cart-item {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.cart-list {
		border: 1px solid black;
		padding: 10px;
	}
	.total {
		text-align: right;
	}
</style>
