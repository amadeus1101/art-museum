import { FC } from 'react';
import MiniCardStyles from './styled';
import CardDescription from '../CardDescription';
import default_icon from '../../assets/img/image-micro.png';

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
      <CardDescription
        title={title}
        author={author}
        status={status}
        primary={false}
        title_wid={260}
      />
    </MiniCardStyles>
  );
};

export default CardMini;
