import { FC } from 'react';
import { CardsGrid, CardsWrapper } from './styled';
import { CardType } from '../../constants/CardType';
import Card from '../Card';
import { CardItemWrapper } from '../Card/styled';

const CardsSection: FC<{ cards: CardType[] }> = ({ cards }) => {
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
