import { useState, useEffect } from 'react';
import { ArtworkType } from '../constants/ArtworkType';
import { fetchData } from '../utils/fetchData';
import { BASE_URL } from '../constants/api';

export function useArtwork(id: string | undefined) {
	const [artwork, setArtwork] = useState<ArtworkType>({
		id: 0,
		title: 'Loading...',
		artist_title: 'Please wait',
		image_id: '../assets/img/preloader-micro.png',
		is_public_domain: false,
		credit_line: '...',
		date_start: 0,
		date_end: 0,
		dimensions: '...',
		exhibition_history: '...',
		place_of_origin: '...',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown | null>(null);

	useEffect(() => {
		if (id && Number(id)) {
			setLoading(true);
			fetchData(
				`${BASE_URL}/${id}?fields=id,title,artist_title,is_public_domain,image_id,place_of_origin,dimensions,credit_line,exhibition_history,date_start,date_end`
			)
				.then((json) => {
					setArtwork(json.data);
					setLoading(false);
				})
				.catch((err) => {
					setError(err);
					setLoading(false);
				});
		} else setError('Cannot get the information via URI');
	}, []);

	return { artwork, loading, error };
}
