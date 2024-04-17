import BannerText from '../../components/BannerText';
import Headline from '../../components/Headline';
import Wrapper from '../../components/Wrapper';
import bookmark_big from '../../assets/img/icon-bookmark-big.png';
import { CardsWrapper, Flex } from '../../components/CatalogStyles';
import { CardItemWrapper } from '../../components/Card/styled';
import Card from '../../components/Card';
import { FC } from 'react';
import { IFavourites } from '@constants/IFavourites';

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
      <CardsWrapper>
        <Flex>
          {favourites &&
            favourites.map((card) => (
              <CardItemWrapper key={card.id}>
                <Card {...card} state={true} callback={callback} />
              </CardItemWrapper>
            ))}
        </Flex>
      </CardsWrapper>
    </Wrapper>
  );
};

export default Favourites;
