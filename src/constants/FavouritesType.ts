import { CardType } from './CardType';

export type FavouritesType = {
	favourites: CardType[];
	onChangeFavourites: (obj: CardType) => void;
};
