import { FC, useState, useEffect } from 'react';
import { CardType } from '@constants/CardType';
import { IFavourites } from '@constants/IFavourites';
import { sortCards } from '../../utils/sortCards';
import { fetchData } from '../../utils/fetchData';
import { useCards } from "../../hooks/useCards"

import CatalogPlaceholder from './placeholder';
import Headline from '../Headline';
import Card from '../Card';
import Sort from '../Sort';
import { Flex } from './styled';
import { CardItemWrapper } from '../Card/styled';

const Catalog: FC<IFavourites> = ({ favourites, callback }) => {
	const {cards, loading, error, onClickSort} = useCards();

	if (loading) return <CatalogPlaceholder />;
	if (error)
		return (
			<Headline
				title="Cannot load catalog, try again"
				subtitle="Something gone wrong, we are really sorry;("
			/>
		);
	return (
		<>
			<Headline title="Other works for you" subtitle="Here some more" />
			<Sort sort={onClickSort} />
			<Flex>
				{cards.map((card) => (
					<CardItemWrapper key={card.id}>
						<Card
							{...card}
							state={
								favourites?.find((elem) => elem.id === card.id) ? true : false
							}
							callback={callback}
						/>
					</CardItemWrapper>
				))}
			</Flex>
		</>
	);
};

export default Catalog;
