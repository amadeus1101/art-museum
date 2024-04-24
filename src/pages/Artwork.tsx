import axios from 'axios';
import { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import { IFavourites } from '@constants/IFavourites';
import { ExhibitType } from '@constants/ExhibitType';
import { fetchData } from '../utils/fetchData';

import Bookmark from '../components/Bookmark/Bookmark';
import Headline from '../components/Headline';
import { Wrapper } from '../components/WrapperStyles';
import { ImageComponent } from '../components/Card/ImageComponent';
import { ArtworkWrapper } from '../components/ArtworkWrapper';
import pict from '../assets/img/preloader-micro.png';

const Artwork: FC<IFavourites> = ({ favourites, callback }) => {
	const [exhibit, setExhibit] = useState<ExhibitType>({
		id: 0,
		title: 'Loading...',
		artist_title: 'Please wait',
		image_id: pict,
		is_public_domain: false,
		credit_line: '...',
		date_start: 0,
		date_end: 0,
		dimensions: '...',
		exhibition_history: '...',
		place_of_origin: '...',
	});
	const [error, setError] = useState<any>(null);
	const { id } = useParams();
	useEffect(() => {
		if (id && Number(id))
			fetchData(
				`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_title,is_public_domain,image_id,place_of_origin,dimensions,credit_line,exhibition_history,date_start,date_end`
			)
				.then((json) => {
					setExhibit(json.data);
				})
				.catch((err) => {
					setError(err);
				});
		else setError('Cannot get the information via URI');
	}, []);
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
								favourites?.find((elem) => elem.id === exhibit.id)
									? true
									: false
							}
							onClickBookmark={() =>
								callback({
									id: exhibit.id,
									title: exhibit.title,
									artist_title: exhibit.artist_title,
									is_public_domain: exhibit.is_public_domain,
									image_id: exhibit.image_id,
								})
							}
						/>
					</div>
					<ImageComponent
						src={`https://www.artic.edu/iiif/2/${exhibit.image_id}/full/843,/0/default.jpg`}
						alt="exhibition-illustration"
						placeholder={pict}
					/>
				</div>
				<div className="content">
					<div className="legend">
						<h4>{exhibit.title}</h4>
						<p>{exhibit.artist_title}</p>
						<b>{exhibit.date_end}</b>
					</div>
					<div className="overview">
						<h4>Overview</h4>
						<ul>
							<li>
								<p>Artist nationality:</p>
								<span>{exhibit.place_of_origin}</span>
							</li>
							<li>
								<p>Dimensions: Sheet:</p>
								<span>{exhibit.dimensions}</span>
							</li>
							<li>
								<p>Credit Line:</p>
								<span>{exhibit.credit_line}</span>
							</li>
							<li>
								<p>Repository:</p>
								<span>{exhibit.exhibition_history}</span>
							</li>
							<li>
								<p>Status:</p>
								<span>{exhibit.is_public_domain ? 'Public' : 'Private'}</span>
							</li>
						</ul>
					</div>
				</div>
			</ArtworkWrapper>
		</Wrapper>
	);
};

export default Artwork;
