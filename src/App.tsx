import Header from './components/Header';
import Footer from './components/Footer';
import Exhibit from './pages/Exhibit';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import GlobalStyles from './components/GlobalStyles';
import { Routes, Route } from 'react-router-dom';

function App() {
  console.log('app rendered');
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibit/:id" element={<Exhibit />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
