import { FC } from 'react';
import { useState, useEffect } from 'react';
import { CardType } from '../../constants/CardType';
import { CardsGrid, CardsWrapper } from './styled';
import { CardItemWrapper } from '../Card/styled';
import axios from 'axios';
import Card from '../Card';

const CardsSection = () => {
  console.log('Cards section renderred');
  const temp_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((elem) => {
    return {
      id: elem,
      title: 'Loading...',
      artist_title: 'Please wait...',
      is_public_domain: true,
      image_id: '#'
    };
  });
  const [cards, setCards] = useState<CardType[]>([]);
  useEffect(() => {
    async function getCards() {
      try {
        const cardsResp = await axios.get(
          `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=${Math.random() * 100}&limit=18`
        );
        setCards(cardsResp.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getCards();
  }, []);
  return (
    <CardsWrapper>
      <CardsGrid>
        {cards.length > 0
          ? cards.map((card) => (
              <CardItemWrapper key={card.id}>
                <Card {...card} />
              </CardItemWrapper>
            ))
          : temp_arr.map((card) => (
              <CardItemWrapper key={card.id}>
                <Card {...card} />
              </CardItemWrapper>
            ))}
      </CardsGrid>
    </CardsWrapper>
  );
};

export default CardsSection;
