import Header from './components/Header';
import Footer from './components/Footer';
import Exhibit from './pages/Exhibit';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import GlobalStyle from './constants/GlobalStyle';
import FontStyles from './constants/FontStyles';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <FontStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibit" element={<Exhibit />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
