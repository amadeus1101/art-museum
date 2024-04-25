import { useState, useEffect } from 'react';
import { CardType } from '../constants/CardType';
import { sortCards } from '../utils/sortCards';
import { fetchData } from '../utils/fetchData';
import { BASE_URL } from '../constants/api';

export function useCards() {
	const [cards, setCards] = useState<CardType[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown | null>(null);

	const onClickSort = (cond: number) => {
		setCards((prev) => sortCards([...prev], cond));
	};

	useEffect(() => {
		setLoading(true);
		fetchData(
			`${BASE_URL}?fields=id,title,artist_title,is_public_domain,image_id&page=2&limit=18`
		)
			.then((json) => {
				setCards(json.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError(err);
				setLoading(false);
			});
	}, []);
	return { cards, loading, error, onClickSort };
}
