import { fetchData } from './fetchData';
import { BASE_URL } from '../constants/api';

export function searchData(url: string) {
	const response = fetchData(url).then((queryResp) =>
		fetchData(
			`${BASE_URL}?ids=${queryResp.data.map((obj: any) => obj.id).join(',')}&fields=id,title,artist_title,is_public_domain,image_id&limit=9`
		)
	);
	return response;
}
