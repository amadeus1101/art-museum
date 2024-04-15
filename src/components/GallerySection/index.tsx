import { FC } from 'react';
import { GallerySectionWidget, GalleryGrid } from './styled';
import Pagination from '../Pagination';
import Card from '../Card';

type GalleryNode = {
  id: number;
  icon: string;
  title: string;
  author: string;
  status: string;
};

const GallerySection: FC<{ gallery: GalleryNode[] }> = ({ gallery }) => {
  return (
    <GallerySectionWidget>
      <GalleryGrid>
        {gallery.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </GalleryGrid>
      <Pagination />
    </GallerySectionWidget>
  );
};

export default GallerySection;
