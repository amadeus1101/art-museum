import { CardType } from './CardType';

export interface CardTypeFav extends CardType {
  state: boolean;
  callback: (obj: CardType) => void;
}
