import { CardType } from './CardType';

export interface IFavourites {
  favourites: CardType[] | undefined;
  callback: (obj: CardType) => void;
}
