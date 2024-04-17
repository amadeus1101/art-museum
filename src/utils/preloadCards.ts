import { CardType } from '@constants/CardType';
import default_img from '../assets/img/preloader-micro.png';

export function preloadCards(count: number) {
  const preload_data = new Array(count);
  const preloadNode: CardType = {
    id: 0,
    title: 'Loading...',
    artist_title: 'Please wait',
    is_public_domain: false,
    image_id: default_img
  };
  return preload_data.map((el) => preloadNode);
}
