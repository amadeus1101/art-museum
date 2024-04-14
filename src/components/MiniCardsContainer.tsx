import styled from 'styled-components';
import { devices } from '../constants/devices';
import CardMini from './CardMini';
import { FC } from 'react';

const MiniCardsContStyles = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 16px;
  @media ${devices.tablet} {
    column-gap: 6px;
    row-gap: 6px;
  }
`;

type CardNode = {
  id: number;
  icon: string;
  title: string;
  author: string;
  status: string;
};

const MiniCardsContainer: FC<{ cards: CardNode[] }> = ({ cards }) => {
  return (
    <MiniCardsContStyles>
      {cards.map((card) => (
        <CardMini {...card} key={card.id} />
      ))}
    </MiniCardsContStyles>
  );
};

export default MiniCardsContainer;
