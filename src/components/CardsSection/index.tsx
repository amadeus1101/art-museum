import { FC } from 'react';
import { CardsGrid, CardsSectionWidget } from './styled';
import Headline from '../Headline';
import CardMini from '../CardMini';

type CardNode = {
  id: number;
  icon: string;
  title: string;
  author: string;
  status: string;
};

const CardsSection: FC<{ cards: CardNode[] }> = ({ cards }) => {
  return (
    <CardsSectionWidget>
      <Headline title="Other works for you" subtitle="Here some more" />
      <CardsGrid>
        {cards.map((card) => (
          <CardMini {...card} key={card.id} />
        ))}
      </CardsGrid>
    </CardsSectionWidget>
  );
};

export default CardsSection;
