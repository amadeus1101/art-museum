import { FC } from 'react';
import { GalleryWrapper, GalleryGrid } from './styled';
import { CardType } from '../../constants/CardType';
import { GalleryItemWrapper } from '../Card/styled';
import Pagination from '../Pagination';
import Card from '../Card';

const GallerySection: FC<{ gallery: CardType[] }> = ({ gallery }) => {
  return (
    <GalleryWrapper>
      <GalleryGrid>
        {gallery.map((card) => (
          <GalleryItemWrapper key={card.id}>
            <Card {...card} />
          </GalleryItemWrapper>
        ))}
      </GalleryGrid>
      <Pagination />
    </GalleryWrapper>
  );
};

export default GallerySection;
