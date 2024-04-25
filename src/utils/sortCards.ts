import { CardType } from '../constants/CardType';

export function sortCards(cards: CardType[], condition: number) {
	let tmp = cards;
	switch (condition) {
		case 1:
			tmp.sort((a, b) => a.id - b.id);
			return tmp;
		case 2:
			tmp.sort((a, b) => {
				if (a.title < b.title) return -1;
				if (a.title === b.title) return 0;
				else return 1;
			});
			return tmp;
		case 3:
			tmp.sort((a, b) => {
				if (a.artist_title < b.artist_title) return -1;
				if (a.artist_title === b.artist_title) return 0;
				else return 1;
			});
			return tmp;
		default:
			return tmp;
	}
}
