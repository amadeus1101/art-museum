import { useState } from 'react';
import HeaderStyles from './styled';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import icon_home from '../../assets/img/icon_home.png';
import icon_favourites from '../../assets/img/icon-bookmark.png';

const Header = () => {
  const [burgerActive, setBurgerActive] = useState<boolean>(false);
  return (
    <HeaderStyles $active={burgerActive}>
      <nav>
        <div className="logo__inner">
          <Logo icon={1} />
        </div>
        <div className="burger" onClick={() => setBurgerActive(!burgerActive)}></div>
        <div className="navbar">
          <Link to="/" onClick={() => setBurgerActive(false)}>
            <img src={icon_home} alt="home-navigation-icon" />
            <span>Home</span>
          </Link>
          <Link to="/favourites" onClick={() => setBurgerActive(false)}>
            <img src={icon_favourites} alt="bookmark-navigation-icon" />
            <span>Your favourites</span>
          </Link>
        </div>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
