import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { CardType } from '@constants/CardType';
import { IFavourites } from '@constants/IFavourites';

import { CardsWrapper, Flex } from './CatalogStyles';
import { CardItemWrapper } from './Card/styled';
import Headline from './Headline';
import Card from './Card';

const Catalog: FC<IFavourites> = ({ favourites, callback }) => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    async function getCards() {
      try {
        const cardsResp = await axios.get(
          `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=2&limit=18`
        );
        setCards(cardsResp.data.data);
      } catch (err) {
        console.log('Cards error: ', err);
      }
    }
    getCards();
  }, []);
  return (
    <CardsWrapper>
      <Headline title="Other works for you" subtitle="Here some more" />
      <Flex>
        {cards.map((card) => (
          <CardItemWrapper key={card.id}>
            <Card
              {...card}
              state={favourites?.find((elem) => elem.id === card.id) ? true : false}
              callback={callback}
            />
          </CardItemWrapper>
        ))}
      </Flex>
    </CardsWrapper>
  );
};

export default Catalog;
