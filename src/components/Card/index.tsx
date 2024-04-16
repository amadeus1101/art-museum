import { FC } from 'react';
import { CardType } from '../../constants/CardType';
import { Link } from 'react-router-dom';
import Bookmark from '../Bookmark';
import default_icon from '../../assets/img/image-micro.png';

const Card: FC<CardType> = ({ id, title, artist_title, is_public_domain, image_id }) => {
  return (
    <>
      <Link to={'/exhibit/' + id}>
        <div className="icon">
          <img
            src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
            alt="artwork-illustration"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="card__description">
        <div className="content">
          <p>{title}</p>
          <span>{artist_title}</span>
          <b>{is_public_domain ? 'Public' : 'Private'}</b>
        </div>
        <Bookmark />
      </div>
    </>
  );
};

export default Card;
