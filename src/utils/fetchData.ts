export async function fetchData(url: string) {
	const response = await fetch(url)
		.then((res) => res.json())
		.then((json) => json.data);
	return response;
}
