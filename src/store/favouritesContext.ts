import { createContext } from 'react';
import { FavouritesType } from '../constants/FavouritesType';

export const favouritesContext = createContext<FavouritesType | null>(null);
