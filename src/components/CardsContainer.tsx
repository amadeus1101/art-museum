import { FC } from 'react';
import styled from 'styled-components';
import { devices } from '../constants/devices';
import Card from './Card';
import Pagination from './Pagination';

const CardsContainerStyles = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 40px auto 120px;
  padding: 0 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  @media ${devices.tablet} {
    padding: 0 4px;
  }
`;

type CardNode = {
  id: number;
  icon: string;
  title: string;
  author: string;
  status: string;
};

const CardsContainer: FC<{ cards: CardNode[] }> = ({ cards }) => {
  return (
    <>
      <CardsContainerStyles>
        {cards.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </CardsContainerStyles>
      <Pagination />
    </>
  );
};

export default CardsContainer;
