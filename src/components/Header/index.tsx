import { useState } from 'react';
import HeaderStyles from './styled';
import logo_museum from '../../assets/img/logo-museum.png';
import icon_home from '../../assets/img/icon_home.png';
import icon_favourites from '../../assets/img/icon-bookmark.png';

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <HeaderStyles>
      <nav className={burgerActive ? 'active' : ''}>
        <div className="logo">
          <img src={logo_museum} alt="art-museum-logo" />
        </div>
        <div className="burger" onClick={() => setBurgerActive(!burgerActive)}></div>
        <div className="navbar">
          <a className="home" href="#">
            <img src={icon_home} alt="home-navigation-icon" />
            <span>Home</span>
          </a>
          <a className="favourites" href="#">
            <img src={icon_favourites} alt="bookmark-navigation-icon" />
            <span>Your favourites</span>
          </a>
        </div>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
