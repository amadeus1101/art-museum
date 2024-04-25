import { BASE_URL } from '../constants/api';

export function fetchData(endpoint: string) {
	const response = fetch(BASE_URL + endpoint).then((res) => res.json());
	return response;
}
