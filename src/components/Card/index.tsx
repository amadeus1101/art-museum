import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { CardTypeFav } from '@constants/CardTypeFav';

import { ImageComponent } from './ImageComponent';
import Bookmark from '../Bookmark/Bookmark';
import placeholder_img from '../../assets/img/preloader-micro.png';

const Card: FC<CardTypeFav> = ({
  id,
  title,
  artist_title,
  is_public_domain,
  image_id,
  state,
  callback
}) => {
  const [bookmarkActive, setBookmarkActive] = useState(state);
  const onClickBookmark = () => {
    setBookmarkActive(!bookmarkActive);
    callback({
      id: id,
      title: title,
      artist_title: artist_title,
      is_public_domain: is_public_domain,
      image_id: image_id
    });
  };
  return (
    <>
      <Link to={'/artwork/' + id} className="icon">
        <ImageComponent
          src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
          alt="artwork-illustration"
          placeholder={placeholder_img}
        />
      </Link>
      <div className="card__description">
        <Link to={'/artwork/' + id} style={{ width: '100%' }}>
          <div className="content">
            <p>{title ? title : 'Unnamed'}</p>
            <span>{artist_title ? artist_title : 'Unknown'}</span>
            <b>{is_public_domain ? 'Public' : 'Private'}</b>
          </div>
        </Link>
        <Bookmark state={bookmarkActive} onClickBookmark={onClickBookmark} />
      </div>
    </>
  );
};

export default Card;
