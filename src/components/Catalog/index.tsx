import { FC } from 'react';
import { FavouritesType } from '@constants/FavouritesType';
import { CardType } from '@constants/CardType';
import { useFetch } from '../../hooks/useFetch';

import CatalogPlaceholder from './placeholder';
import Headline from '../Headline';
import Card from '../Card';
import Sort from '../Sort';
import { Flex } from './styled';
import { CardItemWrapper } from '../Card/styled';

const Catalog: FC<FavouritesType> = ({ favourites, callback }) => {
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
			{/* <Sort sort={onClickSort} /> */}
			<Flex>
				{data &&
					data.map((card) => (
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
