import Input from '../../components/Input';
import BannerText from '../../components/BannerText';
import Headline from '../../components/Headline';
import CardsSection from '../../components/CardsSection';
import GallerySection from '../../components/GallerySection';
import Wrapper from '../../components/Wrapper';
import { CardType } from '../../constants/CardType';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [gallery, setGallery] = useState<CardType[]>([]);
  useEffect(() => {
    async function getData() {
      const [galleryResp, cardsResp] = await Promise.all([
        axios.get(
          'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=1&limit=3'
        ),
        axios.get(
          'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,is_public_domain,image_id&page=2&limit=12'
        )
      ]);
      setGallery(galleryResp.data.data);
      setCards(cardsResp.data.data);
    }
    getData();
  }, []);
  return (
    <Wrapper>
      <BannerText>
        Let's Find Some <span>Art</span> Here!
      </BannerText>
      <Input />
      <Headline title="Our special gallery" subtitle="Topics for you" />
      <GallerySection gallery={gallery} />
      <Headline title="Other works for you" subtitle="Here some more" />
      <CardsSection cards={cards} />
    </Wrapper>
  );
};

export default Home;
