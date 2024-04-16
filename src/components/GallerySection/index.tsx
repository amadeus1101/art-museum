import { GalleryWrapper, GalleryGrid } from './styled';
import { CardType } from '../../constants/CardType';
import { GalleryItemWrapper } from '../Card/styled';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';
import { CardsPlaceholder } from '../../utils/CardsPlaceholder';
import { usePagination } from '../../utils/usePagination';

const GallerySection = () => {
  console.log('Gallery render');
  const { activePage, pages, onClickPage } = usePagination(11);
  const [gallery, setGallery] = useState<CardType[]>([]);
  useEffect(() => {
    async function getGallery() {
      try {
        const galleryResp = await axios.get(
          `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=${activePage}&limit=3`
        );
        setGallery(galleryResp.data.data);
      } catch (err) {
        console.log('Error: ', err);
      }
    }
    getGallery();
  }, [activePage]);
  return (
    <GalleryWrapper>
      <GalleryGrid>
        {gallery.length > 0
          ? gallery.map((card) => (
              <GalleryItemWrapper key={card.id}>
                <Card {...card} />
              </GalleryItemWrapper>
            ))
          : CardsPlaceholder(3).map((card) => (
              <GalleryItemWrapper key={card.id}>
                <Card {...card} />
              </GalleryItemWrapper>
            ))}
      </GalleryGrid>
      <div className="pagination">
        <ul>
          {pages.map((page) => (
            <li
              className={activePage === page ? 'active' : ''}
              onClick={() => onClickPage(page)}
              key={page}>
              {page}
            </li>
          ))}
        </ul>
      </div>
      {/* <Pagination /> */}
    </GalleryWrapper>
  );
};

export default GallerySection;
