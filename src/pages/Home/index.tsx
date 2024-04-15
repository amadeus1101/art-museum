import Input from '../../components/Input';
import BannerText from '../../components/BannerText';
import Headline from '../../components/Headline';
import CardsSection from '../../components/CardsSection';
import GallerySection from '../../components/GallerySection';
import Wrapper from '../../components/Wrapper';

const Home = () => {
  return (
    <Wrapper>
      <BannerText>
        Let's Find Some <span>Art</span> Here!
      </BannerText>
      <Input />
      <Headline title="Our special gallery" subtitle="Topics for you" />
      <GallerySection />
      <Headline title="Other works for you" subtitle="Here some more" />
      <CardsSection />
    </Wrapper>
  );
};

export default Home;
