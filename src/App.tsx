import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import BannerText from './components/BannerText';
import HeadlineText from './components/HeadlineText';
import CardMini from './components/CardMini';
import Card from './components/Card';
import CardsContainer from './components/CardsContainer';
import Pagination from './components/Pagination';
import MiniCardsContainer from './components/MiniCardsContainer';

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
      <BannerText content="Let's Find Some Art Here!" />
      <Input />
      <HeadlineText title="Our special gallery" subtitle="Topics for you" />
      <CardsContainer cards={arr2} />
      <HeadlineText title="Our special gallery" subtitle="Topics for you" />
      <MiniCardsContainer cards={arr} />
      <Footer />
    </>
  );
}
export default App;
