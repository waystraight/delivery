<script>
	import { products, cart } from "./cartStore";

	const addToCart = (product) => {
		// alert("ok");
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity += 1;
				$cart = $cart;
				return;
			}
		}
		// alert(JSON.stringify(product));
		$cart = [...$cart, product];
	};
</script>

<div class="product-list">
	{#each $products as product}
		<div>
			<div class="img" style="background-image: url({product.image});" />
			<h4>{product.name}</h4>
			<p>{product.price}₴</p>
			<button on:click={() => addToCart(product)}> Додати до кошика </button>
		</div>
	{/each}
</div>

<style>
	.product-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.img {
		height: 150px;
		width: 150px;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
