import { readable, writable } from "svelte/store";

// export const products = readable([
// 	{
// 		id: 1,
// 		name: "Дабл Чізбургер",
// 		image: "/src/img/products/dbl-cheeseburger.jpeg",
// 		price: 15,
// 		quantity: 1,
// 	},
// 	{
// 		id: 2,
// 		name: "Біг Тейсті",
// 		image: "/src/img/products/dbl-cheeseburger.jpeg",
// 		price: 10,
// 		quantity: 1,
// 	},
// 	{
// 		id: 3,
// 		name: "Роял Чізбургер",
// 		image: "/src/img/products/dbl-cheeseburger.jpeg",
// 		price: 5,
// 		quantity: 1,
// 	},
// ]);

export const cart = writable([])
export const adress = writable({
	name: "",
	email: "",
	phone: "",
	city: "",
	street: "",
});

export const activeStore = writable('all');

cart.subscribe(($cart) => {
	if ($cart.length === 0) {
		activeStore.set("all");
	}
});

