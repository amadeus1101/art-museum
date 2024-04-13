import { FC } from 'react';
import CardStyles from './styled';
import bookmark_icon from '../../assets/img/icon-bookmark-2.png';
import default_icon from '../../assets/img/image-default.png';

interface ICard {
  icon: string;
  title: string;
  author: string;
  status: string;
}

const Card: FC<ICard> = ({ icon, title, author, status }) => {
  return (
    <CardStyles>
      <div className="illustration">
        <img src={default_icon} alt="artwork-illustration" />
      </div>
      <div className="description">
        <div className="content">
          <p>{title}</p>
          <span>{author}</span>
          <b>{status}</b>
        </div>
        <div className="bookmark">
          <img src={bookmark_icon} alt="bookmark-icon" />
        </div>
      </div>
    </CardStyles>
  );
};

export default Card;
