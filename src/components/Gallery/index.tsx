import { FC, useState, useEffect } from 'react';
import { CardType } from '@constants/CardType';
import { IFavourites } from '@constants/IFavourites';
import { usePagination } from '../../utils/usePagination';

import GalleryPlaceholder from './placeholder';
import Headline from '../Headline';
import Card from '../Card';
import Pagination from '../Pagination';
import { Grid } from './styled';
import { GalleryItemWrapper } from '../Card/styled';

const Gallery: FC<IFavourites> = ({ favourites, callback }) => {
	const [gallery, setGallery] = useState<CardType[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>(null);
	const { activePage, pages, onClickPage } = usePagination(11);

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=${activePage}&limit=3`
		)
			.then((response) => response.json())
			.then((json) => {
				setGallery(json.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [activePage]);

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
