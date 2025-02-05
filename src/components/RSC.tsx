import { fetchJson } from '@/utils/apis';
import { sleep } from '@/utils/sleep';

interface Props {
	num: number;
	sleepMs?: number;
}

export async function RSC({ num, sleepMs }: Props) {
	const json = await fetchJson(num);

	if (sleepMs) await sleep(sleepMs);

	return (
		<div className='flex flex-col border border-solid border-white p-2'>
			<span>id: {json.id}</span>
			<span>userId: {json.userId}</span>
			<span>title: {json.title}</span>
			<span>completed: {json.completed}</span>
		</div>
	);
}
