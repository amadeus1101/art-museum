import { CardType } from './CardType';

export interface ArtworkType extends CardType {
	place_of_origin: string;
	dimensions: string;
	credit_line: string;
	exhibition_history: string;
	date_start: number;
	date_end: number;
}
