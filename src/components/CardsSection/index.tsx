import { FC } from 'react';
import { useState, useEffect } from 'react';
import { CardType } from '../../constants/CardType';
import { CardsGrid, CardsWrapper } from './styled';
import { CardItemWrapper } from '../Card/styled';
import axios from 'axios';
import Card from '../Card';

const CardsSection = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  useEffect(() => {
    async function getCards() {
      const cardsResp = await axios.get(
        'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=2&limit=12'
      );
      setCards(cardsResp.data.data);
    }
    getCards();
  }, []);
  return (
    <CardsWrapper>
      <CardsGrid>
        {cards.map((card) => (
          <CardItemWrapper key={card.id}>
            <Card {...card} />
          </CardItemWrapper>
        ))}
      </CardsGrid>
    </CardsWrapper>
  );
};

export default CardsSection;
