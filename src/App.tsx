import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import BannerText from './components/BannerText';
import HeadlineText from './components/HeadlineText';
import CardMini from './components/CardMini';

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Header />
      <BannerText content="Let's Find Some Art Here!" />
      <Input />
      <HeadlineText title="Our special gallery" subtitle="Topics for you" />
      <div
        style={{
          width: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '16px',
          rowGap: '16px'
        }}>
        {arr.map((el) => (
          <CardMini
            icon="./assets/img/image-micro.png"
            title="Charles V, bust length, holding a sword, facing right"
            author="Giovanni Britto"
            status="Public"
            key={el}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
export default App;
