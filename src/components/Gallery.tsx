import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { CardType } from '@constants/CardType';
import { IFavourites } from '@constants/IFavourites';
import { usePagination } from '../utils/usePagination';

import { GalleryWrapper, Grid } from './GalleryStyles';
import { GalleryItemWrapper } from './Card/styled';
import Headline from './Headline';
import Card from './Card';

const Gallery: FC<IFavourites> = ({ favourites, callback }) => {
  const [gallery, setGallery] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { activePage, pages, onClickPage } = usePagination(10000);

  useEffect(() => {
    async function getGallery() {
      try {
        setIsLoading(true);
        const galleryResp = await axios.get(
          `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=${activePage}&limit=3`
        );
        setGallery(galleryResp.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log('ahhgrrr...');
      }
    }
    getGallery();
  }, [activePage]);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <GalleryWrapper>
      <Headline title="Our special gallery" subtitle="Topics for you" />
      <Grid>
        {gallery.map((card) => (
          <GalleryItemWrapper key={card.id}>
            <Card
              {...card}
              state={favourites?.find((elem) => elem.id === card.id) ? true : false}
              callback={callback}
            />
          </GalleryItemWrapper>
        ))}
      </Grid>
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
    </GalleryWrapper>
  );
};

export default Gallery;
