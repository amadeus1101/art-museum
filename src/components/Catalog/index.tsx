import { useState, useContext } from 'react';
import { FavouritesType } from '@constants/FavouritesType';
import { CardType } from '@constants/CardType';
import { favouritesContext } from '../../store/favouritesContext';
import { useFetch } from '../../hooks/useFetch';
import { sortCards } from '../../utils/sortCards';

import Card from '../Card';
import Sort from '../Sort';
import Headline from '../Headline';
import CatalogPlaceholder from './placeholder';
import { Flex } from './styled';
import { CardItemWrapper } from '../Card/styled';

const Catalog = () => {
	const { favourites, onChangeFavourites } = useContext(
		favouritesContext
	) as FavouritesType;
	const [sortParam, setSortParam] = useState(0);
	const { data, loading, error } = useFetch<CardType[]>(
		'?fields=id,title,artist_title,is_public_domain,image_id&page=2&limit=18',
		'const'
	);
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
			<Sort param={sortParam} changeParam={setSortParam} />
			<Flex>
				{data &&
					sortCards(data, sortParam + 1).map((card) => (
						<CardItemWrapper key={card.id}>
							<Card
								{...card}
								state={
									favourites?.find((elem) => elem.id === card.id) ? true : false
								}
								callback={onChangeFavourites}
							/>
						</CardItemWrapper>
					))}
			</Flex>
		</>
	);
};

export default Catalog;
