import { FC } from 'react';
import { IFavourites } from '@constants/IFavourites';
import { usePagination } from '../../hooks/usePagination';
import {useGallery} from "../../hooks/useGallery"

import GalleryPlaceholder from './placeholder';
import Headline from '../Headline';
import Card from '../Card';
import Pagination from '../Pagination';
import { Grid } from './styled';
import { GalleryItemWrapper } from '../Card/styled';

const Gallery: FC<IFavourites> = ({ favourites, callback }) => {
	const PAGES_TOTAL = 10000;
	const { activePage, pages, onClickPage } = usePagination(PAGES_TOTAL);
	const {gallery, loading, error} = useGallery(activePage);

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
				{gallery.map((card) => (
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
