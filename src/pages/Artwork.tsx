import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { IFavourites } from '@constants/IFavourites';
import { useArtwork } from '../hooks/useArtwork';

import Bookmark from '../components/Bookmark/Bookmark';
import Headline from '../components/Headline';
import { Wrapper } from '../components/WrapperStyles';
import { ImageComponent } from '../components/Card/ImageComponent';
import { ArtworkWrapper } from '../components/ArtworkWrapper';
import pict from '../assets/img/preloader-micro.png';

const Artwork: FC<IFavourites> = ({ favourites, callback }) => {
	const { id } = useParams();
	const { artwork, loading, error } = useArtwork(id);
	if (error)
		return (
			<Headline
				title="Cannot get artwork you choosed, try again"
				subtitle="UPS!!! Something gone wrong;("
			/>
		);
	return (
		<Wrapper>
			<ArtworkWrapper>
				<div className="illustration">
					<div className="bookmark__wrapper">
						<Bookmark
							state={
								favourites?.find((elem) => elem.id === artwork.id)
									? true
									: false
							}
							onClickBookmark={() =>
								callback({
									id: artwork.id,
									title: artwork.title,
									artist_title: artwork.artist_title,
									is_public_domain: artwork.is_public_domain,
									image_id: artwork.image_id,
								})
							}
						/>
					</div>
					<ImageComponent
						src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
						alt="exhibition-illustration"
						placeholder={pict}
					/>
				</div>
				<div className="content">
					<div className="legend">
						<h4>{artwork.title}</h4>
						<p>{artwork.artist_title}</p>
						<b>{artwork.date_end}</b>
					</div>
					<div className="overview">
						<h4>Overview</h4>
						<ul>
							<li>
								<p>Artist nationality:</p>
								<span>{artwork.place_of_origin}</span>
							</li>
							<li>
								<p>Dimensions: Sheet:</p>
								<span>{artwork.dimensions}</span>
							</li>
							<li>
								<p>Credit Line:</p>
								<span>{artwork.credit_line}</span>
							</li>
							<li>
								<p>Repository:</p>
								<span>{artwork.exhibition_history}</span>
							</li>
							<li>
								<p>Status:</p>
								<span>{artwork.is_public_domain ? 'Public' : 'Private'}</span>
							</li>
						</ul>
					</div>
				</div>
			</ArtworkWrapper>
		</Wrapper>
	);
};

export default Artwork;
