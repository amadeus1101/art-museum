import { FC } from 'react';
import CardStyles from './styled';
import default_icon from '../../assets/img/image-default.png';
import CardDescription from '../CardDescription';

interface ICard {
  id: number;
  icon: string;
  title: string;
  author: string;
  status: string;
}

const Card: FC<ICard> = ({ id, icon, title, author, status }) => {
  return (
    <CardStyles>
      <div className="illustration">
        <img src={default_icon} alt="artwork-illustration" />
      </div>
      <CardDescription
        title={title}
        author={author}
        status={status}
        primary={true}
        title_wid={100}
      />
    </CardStyles>
  );
};

export default Card;
