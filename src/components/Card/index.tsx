import { FC } from 'react';
import { CardType } from '../../constants/CardType';
import { Link } from 'react-router-dom';
import { ImageComponent } from './ImageComponent';
import Bookmark from '../Bookmark';
import placeholder_img from '../../assets/img/preloader-micro.png';

const Card: FC<CardType> = ({ id, title, artist_title, is_public_domain, image_id }) => {
  return (
    <>
      <Link to={'/exhibit/' + id} className="icon">
        <ImageComponent
          src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
          alt="artwork-illustration"
          placeholder={placeholder_img}
        />
      </Link>
      <div className="card__description">
        <div className="content">
          <p>{title ? title : 'Unnamed'}</p>
          <span>{artist_title ? artist_title : 'Unknown'}</span>
          <b>{is_public_domain ? 'Public' : 'Private'}</b>
        </div>
        <Bookmark />
      </div>
    </>
  );
};

export default Card;
