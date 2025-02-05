'use client';

import { JsonPlaceholder } from '@/interface';
import { fetchJson } from '@/utils/apis';
import { useEffect, useState } from 'react';

interface Props {
	num: number;
}

export function RCC({ num }: Props) {
	const [json, setJson] = useState<JsonPlaceholder | null>(null);

	const fetchHandler = async () => {
		const data = await fetchJson(num);
		setJson(data);
	};

	useEffect(() => {
		fetchHandler();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (json === null) return <div>no data</div>;

	return (
		<div className='flex flex-col gap-2 border border-solid border-white p-2'>
			<span>id: {json.id}</span>
			<span>userId: {json.userId}</span>
			<span>title: {json.title}</span>
			<span>completed: {json.completed}</span>
		</div>
	);
}
