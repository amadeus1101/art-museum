import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { IFavourites } from '@constants/IFavourites';
import { ArtworkType } from '../constants/ArtworkType';
import { useFetch } from '../hooks/useFetch';

import Bookmark from '../components/Bookmark/Bookmark';
import Headline from '../components/Headline';
import { Wrapper } from '../components/WrapperStyles';
import { ImageComponent } from '../components/Card/ImageComponent';
import { ArtworkWrapper } from '../components/ArtworkWrapper';
import pict from '../assets/img/preloader-micro.png';

const Artwork: FC<IFavourites> = ({ favourites, callback }) => {
	const { id } = useParams();
	const { data, loading, error } = useFetch<ArtworkType>(
		`/${id}?fields=id,title,artist_title,is_public_domain,image_id,place_of_origin,dimensions,credit_line,exhibition_history,date_start,date_end`,
		'const'
	);
	if (loading) return <Headline title="Loading..." subtitle="Please wait!" />;
	if (data)
		return (
			<Wrapper>
				<ArtworkWrapper>
					<div className="illustration">
						<div className="bookmark__wrapper">
							<Bookmark
								state={
									favourites?.find((elem) => elem.id === data.id) ? true : false
								}
								onClickBookmark={() =>
									callback({
										id: data.id,
										title: data.title,
										artist_title: data.artist_title,
										is_public_domain: data.is_public_domain,
										image_id: data.image_id,
									})
								}
							/>
						</div>
						<ImageComponent
							src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
							alt="exhibition-illustration"
							placeholder={pict}
						/>
					</div>
					<div className="content">
						<div className="legend">
							<h4>{data.title}</h4>
							<p>{data.artist_title}</p>
							<b>{data.date_end}</b>
						</div>
						<div className="overview">
							<h4>Overview</h4>
							<ul>
								<li>
									<p>Artist nationality:</p>
									<span>{data.place_of_origin}</span>
								</li>
								<li>
									<p>Dimensions: Sheet:</p>
									<span>{data.dimensions}</span>
								</li>
								<li>
									<p>Credit Line:</p>
									<span>{data.credit_line}</span>
								</li>
								<li>
									<p>Repository:</p>
									<span>{data.exhibition_history}</span>
								</li>
								<li>
									<p>Status:</p>
									<span>{data.is_public_domain ? 'Public' : 'Private'}</span>
								</li>
							</ul>
						</div>
					</div>
				</ArtworkWrapper>
			</Wrapper>
		);
	else
		return (
			<Headline
				title="Cannot get artwork you choosed, try again"
				subtitle="UPS!!! Something gone wrong;("
			/>
		);
};

export default Artwork;
