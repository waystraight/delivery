import { readable } from "svelte/store";

export const stores = ([
	{
		id: 1,
		name: "KFC",
		img: "https://i.ibb.co/khQ1yTv/kfc.png",
		slug: "kfc",
		products: [
			{
				id: 1,
				name: "Житній з яловичиною",
				img: "https://i.ibb.co/tZ7XXsg/UKR-beef.jpg",
				price: "170",
				quantity: 1
			},
			{
				id: 2,
				name: "Житній з куркою",
				img: "https://i.ibb.co/SJ8w8R2/UKR-chicken.jpg",
				price: "170",
				quantity: 1
			},
			{
				id: 3,
				name: "Біг Мак",
				img: "https://i.ibb.co/qCw8Myh/BIGMAC.jpg",
				price: "118",
				quantity: 1
			},
			{
				id: 4,
				name: "Гамбургер",
				img: "https://i.ibb.co/VMdPrsP/HAMBURGER.jpg",
				price: "57",
				quantity: 1
			},
			{
				id: 5,
				name: "Чізбургер",
				img: "https://i.ibb.co/MVG4mS0/CHEESEBURGER.jpg",
				price: "67",
				quantity: 1
			},
			{
				id: 6,
				name: "Дабл Чізбургер",
				img: "https://i.ibb.co/gSP6nw5/DBL-CHEESEBURGER.jpg",
				price: "101",
				quantity: 1
			},
			{
				id: 7,
				name: "МакЧікен",
				img: "https://i.ibb.co/znQx5kC/Mc-CHICKEN.jpg",
				price: "103",
				quantity: 1
			},
			{
				id: 8,
				name: "Біг Тейсті",
				img: "https://i.ibb.co/Jt3w24f/BIG-TASTY.jpg",
				price: "196",
				quantity: 1
			},
			{
				id: 9,
				name: "Філе-о-фіш",
				img: "https://i.ibb.co/dMG0RMq/FILE-O-FISH.jpg",
				price: "101",
				quantity: 1
			},
			{
				id: 10,
				name: "Роял Чізбургер",
				img: "https://i.ibb.co/K7KpN9X/ROYAL-CHEESEBURGER.jpg",
				price: "134",
				quantity: 1
			},
			{
				id: 11,
				name: "Дабл Роял Чізбургер",
				img: "https://i.ibb.co/3CTXjGP/DBL-ROYAL-CHEESEBURGER.jpg",
				price: "203",
				quantity: 1
			},
			{
				id: 12,
				name: "Чізбургер з беконом",
				img: "https://i.ibb.co/QjRs9qM/CHEESE-BACON.jpg",
				price: "83",
				quantity: 1
			},
			{
				id: 13,
				name: "Чікен Джуніор",
				img: "https://i.ibb.co/TtmzWvm/chicken-junior.jpg",
				price: "67",
				quantity: 1
			},
			{
				id: 14,
				name: "МакТост із сиром",
				img: "https://i.ibb.co/M7n1Xpr/TOAST.jpg",
				price: "40",
				quantity: 1
			}
		]
		// image: ""
	},
	{
		id: 2,
		name: "McDonald's",
		img: "https://i.ibb.co/Kx588xN/mcdonalds.png",
		slug: "mcdonalds",
		products: [
			{
				id: 1,
				name: "Житній з яловичиною",
				img: "https://i.ibb.co/tZ7XXsg/UKR-beef.jpg",
				price: "170",
				quantity: 1
			},
			{
				id: 2,
				name: "Житній з куркою",
				img: "https://i.ibb.co/SJ8w8R2/UKR-chicken.jpg",
				price: "170",
				quantity: 1
			},
			{
				id: 3,
				name: "Біг Мак",
				img: "https://i.ibb.co/qCw8Myh/BIGMAC.jpg",
				price: "118",
				quantity: 1
			},
			{
				id: 4,
				name: "Гамбургер",
				img: "https://i.ibb.co/VMdPrsP/HAMBURGER.jpg",
				price: "57",
				quantity: 1
			},
			{
				id: 5,
				name: "Чізбургер",
				img: "https://i.ibb.co/MVG4mS0/CHEESEBURGER.jpg",
				price: "67",
				quantity: 1
			},
			{
				id: 6,
				name: "Дабл Чізбургер",
				img: "https://i.ibb.co/gSP6nw5/DBL-CHEESEBURGER.jpg",
				price: "101",
				quantity: 1
			},
			{
				id: 7,
				name: "МакЧікен",
				img: "https://i.ibb.co/znQx5kC/Mc-CHICKEN.jpg",
				price: "103",
				quantity: 1
			},
			{
				id: 8,
				name: "Біг Тейсті",
				img: "https://i.ibb.co/Jt3w24f/BIG-TASTY.jpg",
				price: "196",
				quantity: 1
			},
			{
				id: 9,
				name: "Філе-о-фіш",
				img: "https://i.ibb.co/dMG0RMq/FILE-O-FISH.jpg",
				price: "101",
				quantity: 1
			},
			{
				id: 10,
				name: "Роял Чізбургер",
				img: "https://i.ibb.co/K7KpN9X/ROYAL-CHEESEBURGER.jpg",
				price: "134",
				quantity: 1
			},
			{
				id: 11,
				name: "Дабл Роял Чізбургер",
				img: "https://i.ibb.co/3CTXjGP/DBL-ROYAL-CHEESEBURGER.jpg",
				price: "203",
				quantity: 1
			},
			{
				id: 12,
				name: "Чізбургер з беконом",
				img: "https://i.ibb.co/QjRs9qM/CHEESE-BACON.jpg",
				price: "83",
				quantity: 1
			},
			{
				id: 13,
				name: "Чікен Джуніор",
				img: "https://i.ibb.co/TtmzWvm/chicken-junior.jpg",
				price: "67",
				quantity: 1
			},
			{
				id: 14,
				name: "МакТост із сиром",
				img: "https://i.ibb.co/M7n1Xpr/TOAST.jpg",
				price: "40",
				quantity: 1
			}
		]
		// image: ""
	},
	{
		id: 2,
		name: "HESBURGER",
		img: "https://i.ibb.co/xm4zkgJ/hesburger.png",
		slug: "hesburger",
		products: [
			{
				id: 1,
				name: "Житній з яловичиною",
				img: "https://i.ibb.co/tZ7XXsg/UKR-beef.jpg",
				price: "170",
				quantity: 1
			},
			{
				id: 2,
				name: "Житній з куркою",
				img: "https://i.ibb.co/SJ8w8R2/UKR-chicken.jpg",
				price: "170",
				quantity: 1
			},
			{
				id: 3,
				name: "Біг Мак",
				img: "https://i.ibb.co/qCw8Myh/BIGMAC.jpg",
				price: "118",
				quantity: 1
			},
			{
				id: 4,
				name: "Гамбургер",
				img: "https://i.ibb.co/VMdPrsP/HAMBURGER.jpg",
				price: "57",
				quantity: 1
			},
			{
				id: 5,
				name: "Чізбургер",
				img: "https://i.ibb.co/MVG4mS0/CHEESEBURGER.jpg",
				price: "67",
				quantity: 1
			},
			{
				id: 6,
				name: "Дабл Чізбургер",
				img: "https://i.ibb.co/gSP6nw5/DBL-CHEESEBURGER.jpg",
				price: "101",
				quantity: 1
			},
			{
				id: 7,
				name: "МакЧікен",
				img: "https://i.ibb.co/znQx5kC/Mc-CHICKEN.jpg",
				price: "103",
				quantity: 1
			},
			{
				id: 8,
				name: "Біг Тейсті",
				img: "https://i.ibb.co/Jt3w24f/BIG-TASTY.jpg",
				price: "196",
				quantity: 1
			},
			{
				id: 9,
				name: "Філе-о-фіш",
				img: "https://i.ibb.co/dMG0RMq/FILE-O-FISH.jpg",
				price: "101",
				quantity: 1
			},
			{
				id: 10,
				name: "Роял Чізбургер",
				img: "https://i.ibb.co/K7KpN9X/ROYAL-CHEESEBURGER.jpg",
				price: "134",
				quantity: 1
			},
			{
				id: 11,
				name: "Дабл Роял Чізбургер",
				img: "https://i.ibb.co/3CTXjGP/DBL-ROYAL-CHEESEBURGER.jpg",
				price: "203",
				quantity: 1
			},
			{
				id: 12,
				name: "Чізбургер з беконом",
				img: "https://i.ibb.co/QjRs9qM/CHEESE-BACON.jpg",
				price: "83",
				quantity: 1
			},
			{
				id: 13,
				name: "Чікен Джуніор",
				img: "https://i.ibb.co/TtmzWvm/chicken-junior.jpg",
				price: "67",
				quantity: 1
			},
			{
				id: 14,
				name: "МакТост із сиром",
				img: "https://i.ibb.co/M7n1Xpr/TOAST.jpg",
				price: "40",
				quantity: 1
			}
		]
		// image: ""
	}
])