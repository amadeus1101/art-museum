import Input from '../../components/Input';
import BannerText from '../../components/BannerText';
import Headline from '../../components/Headline';
import CardsSection from '../../components/CardsSection';
import GallerySection from '../../components/GallerySection';
import Wrapper from '../../components/Wrapper';

const Home = () => {
  const arr = [
    {
      id: 0,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    },
    {
      id: 1,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    },
    {
      id: 2,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    },
    {
      id: 3,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    },
    {
      id: 4,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    },
    {
      id: 5,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    },
    {
      id: 6,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    }
  ];
  const arr2 = [
    {
      id: 0,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    },
    {
      id: 1,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    },
    {
      id: 2,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    }
  ];
  return (
    <Wrapper>
      <BannerText>
        Let's Find Some <span>Art</span> Here!
      </BannerText>
      <Input />
      <Headline title="Our special gallery" subtitle="Topics for you" />
      <GallerySection gallery={arr2} />
      <Headline title="Other works for you" subtitle="Here some more" />
      <CardsSection cards={arr} />
    </Wrapper>
  );
};

export default Home;
