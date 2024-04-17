import axios from 'axios';
import Input from '../../components/Input';
import BannerText from '../../components/BannerText';
import Headline from '../../components/Headline';
import Card from '../../components/Card';
import Wrapper from '../../components/Wrapper';
import { GalleryWrapper, Grid } from '../../components/GalleryStyles';
import { GalleryItemWrapper } from '../../components/Card/styled';
import { CardsWrapper, Flex } from '../../components/CatalogStyles';
import { CardItemWrapper } from '../../components/Card/styled';
import { CardType } from '@constants/CardType';
import { CardsPlaceholder } from '../../utils/CardsPlaceholder';
import { usePagination } from '../../utils/usePagination';
import { useState, useEffect, FC } from 'react';
import { IFavourites } from '@constants/IFavourites';

const Home: FC<IFavourites> = ({ favourites, callback }) => {
  console.log('home renered');
  const { activePage, pages, onClickPage } = usePagination(10000);
  const [gallery, setGallery] = useState<CardType[]>([]);
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    async function getGallery() {
      try {
        const galleryResp = await axios.get(
          `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=${activePage}&limit=3`
        );
        setGallery(galleryResp.data.data);
      } catch (err) {
        console.log('Gallery Error: ', err);
      }
    }
    getGallery();
  }, [activePage]);

  useEffect(() => {
    async function getCards() {
      try {
        const cardsResp = await axios.get(
          `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=${Math.random() * 100}&limit=18`
        );
        setCards(cardsResp.data.data);
      } catch (err) {
        console.log('Cards error: ', err);
      }
    }
    getCards();
  }, []);

  // useEffect(() => {
  //   console.log('new fav');
  //   setCards((prev) => [...prev]);
  //   setGallery((prev) => [...prev]);
  // }, [favourites]);
  return (
    <Wrapper>
      <BannerText>
        Let's Find Some <span>Art</span> Here!
      </BannerText>
      <Input />
      <Headline title="Our special gallery" subtitle="Topics for you" />
      <GalleryWrapper>
        <Grid>
          {gallery.length > 0 &&
            gallery.map((card) => (
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
      <Headline title="Other works for you" subtitle="Here some more" />
      <CardsWrapper>
        <Flex>
          {cards.length > 0 &&
            cards.map((card) => (
              <CardItemWrapper key={card.id}>
                <Card
                  {...card}
                  state={favourites?.find((elem) => elem.id === card.id) ? true : false}
                  callback={callback}
                />
              </CardItemWrapper>
            ))}
        </Flex>
      </CardsWrapper>
    </Wrapper>
  );
};

export default Home;
