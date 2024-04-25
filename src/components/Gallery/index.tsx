import { FC } from 'react';
import { FavouritesType } from '@constants/FavouritesType';
import { usePagination } from '../../hooks/usePagination';
import { useFetch } from '../../hooks/useFetch';
import { CardType } from '../../constants/CardType';
import { PAGES_TOTAL } from '../../constants/api';

import GalleryPlaceholder from './placeholder';
import Headline from '../Headline';
import Card from '../Card';
import Pagination from '../Pagination';
import { Grid } from './styled';
import { GalleryItemWrapper } from '../Card/styled';

const Gallery: FC<FavouritesType> = ({ favourites, callback }) => {
	const { activePage, pages, onClickPage } = usePagination(PAGES_TOTAL);
	const { data, loading, error } = useFetch<CardType[]>(
		`?fields=id,title,artist_title,is_public_domain,image_id&page=${3}&limit=3`,
		activePage
	);
	if (loading) return <GalleryPlaceholder fakepages={pages} />;
	if (error)
		return (
			<Headline
				title="Cannot load gallery, try again"
				subtitle="Something gone wrong, we are sorry;("
			/>
		);

	return (
		<>
			<Headline title="Our special gallery" subtitle="Topics for you" />
			<Grid>
				{data &&
					data.map((card) => (
						<GalleryItemWrapper key={card.id}>
							<Card
								{...card}
								state={
									favourites?.find((elem) => elem.id === card.id) ? true : false
								}
								callback={callback}
							/>
						</GalleryItemWrapper>
					))}
			</Grid>
			<Pagination
				activePage={activePage}
				pages={pages}
				onClickPage={onClickPage}
			/>
		</>
	);
};

export default Gallery;
