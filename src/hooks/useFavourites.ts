import { useEffect, useState } from 'react';
import { CardType } from '../constants/CardType';

export function useFavourites() {
	const [favourites, setFavourites] = useState<CardType[]>([]);

	useEffect(() => {
		const data = localStorage.getItem('favourites');
		if (data) setFavourites(JSON.parse(data));
	}, []);

	const onChangeFavourites = (obj: CardType) => {
		let favouritesItems: CardType[];
		if (favourites?.find((elem) => elem.id === obj.id)) {
			favouritesItems = favourites.filter((el) => el.id !== obj.id);
		} else {
			favouritesItems = [...favourites, obj];
		}
		console.log(favouritesItems);
		localStorage.setItem('favourites', JSON.stringify(favouritesItems));
		setFavourites(favouritesItems);
	};
	return { favourites, onChangeFavourites };
}
