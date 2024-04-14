import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import BannerText from './components/BannerText';
import CardsSection from './components/CardsSection';
import GallerySection from './components/GallerySection';
import Exhibit from './pages/Exhibit';

function App() {
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
    <>
      <Header />
      {/* <BannerText>
        Let's Find Some <span>Art</span> Here!
      </BannerText>
      <Input />
      <GallerySection gallery={arr2} />
      <CardsSection cards={arr} /> */}
      <Exhibit />
      <Footer />
    </>
  );
}
export default App;
