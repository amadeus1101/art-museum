import { GalleryWrapper, GalleryGrid } from './styled';
import { CardType } from '../../constants/CardType';
import { GalleryItemWrapper } from '../Card/styled';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';

const GallerySection = () => {
  const [pages, setPages] = useState<number[]>([1, 2, 3, 4]);
  const [activePage, setActivePage] = useState(1);
  const [gallery, setGallery] = useState<CardType[]>([]);
  const temp_arr = [1, 2, 3].map((elem) => {
    return {
      id: elem,
      title: 'Loading...',
      artist_title: 'Please wait...',
      is_public_domain: true,
      image_id: '#'
    };
  });
  const onClickPag = (page_num: number) => {
    setActivePage(page_num);
  };
  useEffect(() => {
    async function getGallery() {
      try {
        const galleryResp = await axios.get(
          `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=${1}&limit=3`
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
          : temp_arr.map((card) => (
              <GalleryItemWrapper key={card.id}>
                <Card {...card} />
              </GalleryItemWrapper>
            ))}
      </GalleryGrid>
      <div className="pagination">
        <ul>
          {pages.map((page, index) => (
            <li
              className={activePage === page ? 'active' : ''}
              onClick={() => onClickPag(page)}
              key={page}>
              {page}
            </li>
          ))}
          <li
            onClick={() => {
              setPages((prev) => prev.map((el) => el + 4));
              setActivePage((prev) => prev + 4);
            }}>
            +
          </li>
        </ul>
      </div>
      {/* <Pagination /> */}
    </GalleryWrapper>
  );
};

export default GallerySection;
