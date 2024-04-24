import { useState, useEffect } from "react";
import {CardType} from "../constants/CardType";
import {fetchData} from "../utils/fetchData";

export function useGallery(active: string) {
  const [gallery, setGallery] = useState<CardType[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>(null);

  useEffect(() => {
		setLoading(true);
		fetchData(
			`https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=${active}&limit=3`
		)
			.then((json) => {
				setGallery(json.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [active]);
  
  return {gallery, loading, error}
}