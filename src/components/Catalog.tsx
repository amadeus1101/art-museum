import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { CardType } from '@constants/CardType';
import { IFavourites } from '@constants/IFavourites';

import { CardsWrapper, Flex } from './CatalogStyles';
import { CardItemWrapper } from './Card/styled';
import Headline from './Headline';
import Card from './Card';
import CatalogPlaceholder from './CatalogPlaceholder';

const Catalog: FC<IFavourites> = ({ favourites, callback }) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=2&limit=18`
    )
      .then((response) => response.json())
      .then((json) => {
        setCards(json.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <CatalogPlaceholder />;
  if (error)
    return (
      <Headline
        title="Cannot load catalog, try again"
        subtitle="Something gone wrong, we are really sorry;("
      />
    );
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
