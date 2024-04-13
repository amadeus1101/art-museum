import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import BannerText from './components/BannerText';
import HeadlineText from './components/HeadlineText';

function App() {
  return (
    <>
      <Header />
      <BannerText content="Let's Find Some Art Here!" />
      <Input />
      <HeadlineText title="Our special gallery" subtitle="Topics for you" />
      <Footer />
    </>
  );
}
export default App;
