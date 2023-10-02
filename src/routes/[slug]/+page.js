import { stores } from '../../components/Stores';

export function load({ params }) {

	const storeSlug = params.slug;

	const store = stores.find((store) => store.slug === storeSlug);
	return {
		store,
		summaries: stores.map((store) => ({
			slug: store.slug,
			name: store.name,
			products: store.products
		}))
	};
	// console.log("data", { data });
	// console.log("data", { store });
}

// import { error } from '@sveltejs/kit';

// export function load({ params }) {
// 	if (params.slug === 'kfc') {
// 		return {
// 			title: 'Hello world!',
// 			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
// 		};
// 	}


// 	throw error(404, 'Not found');
// }