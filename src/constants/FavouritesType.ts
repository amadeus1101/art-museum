import { CardType } from './CardType';

export interface FavouritesType {
	favourites: CardType[];
	callback: (obj: CardType) => void;
}
