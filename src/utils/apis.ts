import { JsonPlaceholder } from '@/interface';

export async function fetchJson(num: number) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${num}`,
		{ method: 'get', cache: 'no-store' }
	);
	const data: JsonPlaceholder = await response.json();

	return data;
}
