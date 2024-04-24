export function fetchData(url: string) {
	const response = fetch(url).then((res) => res.json());
	return response;
}
