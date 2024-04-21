import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyles } from './styled';

import Logo from '../Logo';
import icon_home from '../../assets/img/icon_home.png';
import icon_favourites from '../../assets/img/icon-bookmark.png';

const Header = () => {
  const [burgerActive, setBurgerActive] = useState<boolean>(false);
  return (
    <HeaderStyles $active={burgerActive}>
      <nav>
        <div className="logo__inner">
          <Link to="/" onClick={() => setBurgerActive(false)}>
            <Logo icon={1} />
          </Link>
        </div>
        <div className="burger" onClick={() => setBurgerActive(!burgerActive)}></div>
        <div className="navbar">
          <Link to="/" onClick={() => setBurgerActive(false)}>
            <img src={icon_home} alt="home-navigation-icon" />
            <span>Home</span>
          </Link>
          <Link to="/favourites" onClick={() => setBurgerActive(false)}>
            <img src={icon_favourites} alt="bookmark-navigation-icon" />
            <span>Your Favourites</span>
          </Link>
        </div>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
