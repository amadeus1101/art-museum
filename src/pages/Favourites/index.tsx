import { FC } from 'react';
import { IFavourites } from '@constants/IFavourites';

import Card from '../../components/Card';
import BannerText from '../../components/BannerText';
import Headline from '../../components/Headline';
import { Wrapper } from '../../components/WrapperStyles';
import { Flex } from '../../components/CatalogStyles';
import { CardItemWrapper } from '../../components/Card/styled';
import bookmark_big from '../../assets/img/icon-bookmark-big.png';

const Favourites: FC<IFavourites> = ({ favourites, callback }) => {
  return (
    <Wrapper>
      <BannerText>
        Here Are Your{' '}
        <span>
          <img src={bookmark_big} alt="big-bookmark-icon" />
          Favourites
        </span>
      </BannerText>
      <Headline subtitle="Saved for you" title="Your favourites list" />
      <Flex>
        {favourites &&
          favourites.map((card) => (
            <CardItemWrapper key={card.id}>
              <Card {...card} state={true} callback={callback} />
            </CardItemWrapper>
          ))}
      </Flex>
    </Wrapper>
  );
};

export default Favourites;
