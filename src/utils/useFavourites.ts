import { useState, useEffect } from 'react';
import { CardType } from '../constants/CardType';

export function useFavourites() {
  const [favourites, setFavourites] = useState<CardType[]>([]);

  const onClickFavourite = (obj: CardType) => {
    if (favourites.includes(obj)) {
      setFavourites((prev) => prev.filter((elem) => elem.id !== obj.id));
    } else {
      setFavourites((prev) => [...prev, obj]);
    }
  };
  return { favourites, onClickFavourite };
}
