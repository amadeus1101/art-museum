import { FC } from 'react';
import MiniCardStyles from './styled';
import bookmark_icon from '../../assets/img/icon-bookmark-2.png';

import default_icon from '../../assets/img/image-micro.png';
import Bookmark from '../Bookmark';

interface IMiniCard {
  icon: string;
  title: string;
  author: string;
  status: string;
}

const CardMini: FC<IMiniCard> = ({ icon, title, author, status }) => {
  return (
    <MiniCardStyles>
      <div className="icon">
        <img src={default_icon} alt="artwork-illustration" />
      </div>
      <div className="content">
        <p>{title}</p>
        <span>{author}</span>
        <b>{status}</b>
      </div>
      <Bookmark />
    </MiniCardStyles>
  );
};

export default CardMini;
