import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CardType } from './constants/CardType';
import GlobalStyles from './components/GlobalStyles';

import Header from './components/Header';
import Footer from './components/Footer';
import Exhibit from './pages/Exhibit';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

function App() {
  console.log('--APP');
  const [favourites, setFavourites] = useState<CardType[]>([]);
  const onChangeFavourites = (obj: CardType) => {
    if (favourites?.find((elem) => elem.id === obj.id)) {
      setFavourites((prev) => prev?.filter((el) => el.id !== obj.id));
    } else {
      setFavourites((prev) => (prev ? [...prev, obj] : [obj]));
    }
  };
  useEffect(() => {
    const data = localStorage.getItem('favourites');
    if (data) setFavourites(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home favourites={favourites} callback={onChangeFavourites} />} />
        <Route
          path="/exhibit/:id"
          element={<Exhibit favourites={favourites} callback={onChangeFavourites} />}
        />
        <Route
          path="/favourites"
          element={<Favourites favourites={favourites} callback={onChangeFavourites} />}
        />
        <Route path="*" element={<Home favourites={favourites} callback={onChangeFavourites} />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
