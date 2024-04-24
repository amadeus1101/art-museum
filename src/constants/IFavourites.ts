import { CardType } from './CardType';

export interface IFavourites {
  favourites: CardType[];
  callback: (obj: CardType) => void;
}
