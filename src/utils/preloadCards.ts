import default_img from '../assets/img/preloader-micro.png';

export function preloadCards(count: number) {
	const preload_data = new Array();
	for (let i = 0; i < count; i++) {
		preload_data.push({
			id: i,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		});
	}
	return preload_data;
}
