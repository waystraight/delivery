
import { stores } from '../components/Stores';

export function load() {
	return {
		summaries: stores.map((store) => ({
			slug: store.slug,
			img: store.img,
			name: store.name
		}))
	};
}