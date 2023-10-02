<script>
	import { cart, adress } from "./cartStore";
	import { onMount } from "svelte";

	const chekOut = () => {
		alert(JSON.stringify($cart));
		//
		alert(JSON.stringify($adress));
	};

	// form
	const handleSubmit = async (event) => {
		event.preventDefault();
		// Збираємо дані форми
		const formData = new FormData(event.target);

		// Додавання товарів з кошика до даних форми
		for (const item of $cart) {
			formData.append(`product_${item.id}`, item.name);
			formData.append(`quantity_${item.id}`, item.quantity);
			formData.append(`price_${item.id}`, item.price);
		}
		const scriptURL =
			"https://script.google.com/macros/s/AKfycbye73l26BIai3PdfEj3ot4Dz7WhHnVa2TO_Stc-8rteplIGhq_i0JINTlgaN37n3wQvAA/exec";

		try {
			const response = await fetch(scriptURL, {
				method: "POST",
				body: new FormData(event.target),
			});

			if (response.ok) {
				event.target.reset();
				alert("Замовлення успішно прийнято!");
			} else {
				alert(
					"Помилка відправки замовлення. Будь ласка, спробуйте пізніше."
				);
			}
		} catch (error) {
			console.error("Error!", error.message);
			alert("Помилка відправки замовлення. Будь ласка, спробуйте пізніше.");
		}
	};

	onMount(() => {});
</script>

<form on:submit={handleSubmit} class="form" name="submit-to-google-sheet">
	<input
		type="text"
		name="f-name"
		class="form__first-name"
		autocomplete="off"
		placeholder="Ім'я"
		required
	/>
	<input
		type="text"
		name="l-name"
		class="form__last-name"
		autocomplete="off"
		placeholder="Прізвище"
		required
	/>
	<input type="email" name="email" class="form__email" placeholder="Пошта" />
	<!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" -->
	<input
		type="tel"
		name="number"
		class="form__number"
		inputmode="numeric"
		placeholder="Номер телефону"
	/>
	<input
		type="text"
		name="city"
		class="form__city"
		autocomplete="off"
		placeholder="Місто"
		required
	/>
	<input
		type="text"
		name="street"
		class="form__street"
		autocomplete="off"
		placeholder="Вулиця, будинок, квартира"
		required
	/>
	<textarea
		name="text"
		cols="30"
		rows="6"
		size="false"
		placeholder="Додаткові коментарі"
	/>
	{#each $cart as item}
		{#each $cart as item}
			<input type="hidden" name="product" value={item.name} />
			<!-- <input type="hidden" name={`price_${item.id}`} value={item.price} /> -->
			<input type="hidden" name="quantity" value={item.quantity} />
		{/each}
	{/each}
	<!-- <button on:click={chekOut}>Замовити</button> -->
	<input type="submit" class="form__submit" value="Замовити" />

	<span id="sendTxt" />
</form>

<!-- <div>
	<button on:click={chekOut}>Замовити</button>
</div> -->

<style>
	form {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1em;
		/* padding: 0 25px; */
	}
	.form__submit {
		background-color: #4caf50;
		color: #fff;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 16px;
	}
</style>
