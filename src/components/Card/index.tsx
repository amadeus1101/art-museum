import { FC } from 'react';
import CardStyles from './styled';
import default_icon from '../../assets/img/image-default.png';
import Bookmark from '../Bookmark';

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
        <Bookmark />
      </div>
    </CardStyles>
  );
};

export default Card;
