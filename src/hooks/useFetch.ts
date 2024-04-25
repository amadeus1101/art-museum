import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

export function useFetch<T>(endpoint: string, deps: string) {
	const [data, setData] = useState<T>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		fetchData(endpoint)
			.then((json) => {
				setData(json.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError('An error occured. Awkward...');
				setLoading(false);
			});
	}, [deps]);

	return { data, loading, error };
}
