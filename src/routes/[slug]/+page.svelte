<script>
	import CarLenght from "../../components/СarLength.svelte";
	import { cart, activeStore } from "../../components/cartStore";

	export let data;
	$: store = $activeStore;
	let slug = data.store.name;

	let successMessage = "";

	const addToCart = (product) => {
		const existingProduct = $cart.find((item) => item.id === product.id);

		if (existingProduct) {
			existingProduct.quantity += 1;
		} else {
			$cart = [...$cart, { ...product, quantity: 1 }];
			$activeStore = slug;
			console.log("store", { store });
			console.log("store", { activeStore });
		}

		successMessage = `${product.name} додано до кошика!`;

		setTimeout(() => {
			successMessage = "";
		}, 3000);
	};

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

<h1>{data.store.name}</h1>
<div class="main">
	<div class="stores-container">
		{#if store === "all"}
			{#each data.summaries as { slug, name }}
				<a href="/{slug}">
					<h2>{name}</h2>
				</a>
			{/each}
		{:else}
			{#each data.summaries as { slug, name }}
				<div class={name !== store ? "inactive-store" : ""}>
					<a href="/{slug}" class={name !== store ? "inactive-a" : ""}>
						<h2 class={name === store ? "active-" + slug : ""}>
							{name}
						</h2>
					</a>
				</div>
			{/each}
		{/if}
	</div>
	<div class="products-container">
		<div class="cards">
			{#each data.store.products as product}
				<div class="card">
					<img src={product.img} alt="" />
					<h3>{product.name}</h3>
					<p>{product.price}₴</p>
					<button
						class="addToCartButton"
						on:click={() => addToCart(product)}
					>
						Додати до кошика
					</button>
				</div>
			{/each}
		</div>
	</div>
	<div class="cart">
		<div class="cart">
			<div class="cart-list">
				<CarLenght />
				<img
					class="cart-icon"
					src="https://i.ibb.co/DR9zdTK/cart.png"
					alt=""
				/>
				{#each $cart as item}
					{#if item.quantity > 0}
						<div class="cart-item">
							<!-- <button
								on:click={() => removeFromCart(item)}
								class="remove-button">×</button
							> -->
							<p>{item.name}</p>
							<!-- <img class="item-img" src={item.img} alt="item.name" /> -->
							<div>
								<button on:click={() => minusItem(item)}>-</button>
								{item.quantity}
								<button on:click={() => plusItem(item)}>+</button>
							</div>
							<p>{item.price * item.quantity}₴</p>
							<p>_________</p>
						</div>
					{/if}
				{/each}
			</div>
			<div class="total">
				<h4>
					<!-- Загалом: {total}₴ -->
				</h4>
			</div>
		</div>
	</div>
</div>

{#if successMessage}
	<div class="success-message">
		{successMessage}
	</div>
{/if}

<style>
	.main {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 2em;

		/* overflow-x: hidden; */
	}
	.stores-container {
		grid-column: span 1;
	}
	.stores-container a {
		color: #000;
		text-decoration: none;
	}
	.stores-container a:hover {
		text-decoration: underline;
	}
	.active-kfc {
		color: #d13132;
	}
	.active-mcdonalds {
		color: #f7bc45;
	}
	.active-hesburger {
		color: #ed3833;
	}
	.inactive-a {
		pointer-events: none;
		color: lightgray !important;
	}
	.inactive-store {
		position: relative;
	}
	.inactive-store:hover::before {
		content: "Ой! На даний момент можна зробити замовлення тільки з одного закладу... Спустошіть ваш кошик для доступу до іншого закладу!";
		position: absolute;
		/* left: 15px; */
		background-color: white;
		color: grey;
		padding: 3px;
		border: 1px solid black;
		border-radius: 5px;
		width: 250px;
		/* white-space: nowrap; */
		z-index: 1;
	}
	.products-container {
		display: grid;
		grid-column: span 10;
		flex-wrap: wrap;
		margin: 25px auto;
	}
	.cards {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 16px;
	}
	.card {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 320px;
		background: #fff;
		font-family: "Roboto", sans-serif;
		padding: 16px;
		box-shadow: 0 9px 17px -6px rgba(0, 0, 0, 0.2);
		margin: 5px;
		border-radius: 0.5em;
		transition: all 400ms ease;
	}
	.addToCartButton {
		background-color: #4caf50;
		color: #fff;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 16px;
		transition: background-color 0.3s ease;
	}

	.addToCartButton:hover {
		background-color: #45a049;
	}
	.cart {
		display: grid;
		grid-template-columns: span 1fr;
		justify-content: center;
		/* align-items: center; */
	}
	.cart-icon {
		height: 40px;
	}
	.success-message {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: #45a049;
		color: white;
		text-align: center;
		padding: 10px;
		animation: slide-in 1s ease-out;
	}

	@keyframes slide-in {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
