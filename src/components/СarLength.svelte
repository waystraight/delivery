<script>
	import { cart } from "./cartStore";

	let cartText = "";

	$: {
		const itemCount = $cart.length;
		if (itemCount === 0) {
			cartText = "Тут поки порожньо...";
		} else if (itemCount === 1) {
			cartText = "В кошику 1 позиція :";
		} else if (itemCount >= 2 && itemCount <= 4) {
			cartText = `В кошику ${itemCount} позиції :`;
		} else if (itemCount >= 5) {
			cartText = "В кошику 5 позицій :";
		}
	}
</script>

<p>{cartText}</p>
