export async function sleep(ms: number) {
	const promise = new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});

	return promise;
}
