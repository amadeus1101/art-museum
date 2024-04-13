import logo_museum_1 from '../../assets/img/logo-museum.png';
import logo_museum_2 from '../../assets/img/logo-museum-2.png';
import LogoStyles from './styled';
import { FC } from 'react';

interface ILogo {
  icon: number;
  visibility: boolean;
}

const Logo: FC<ILogo> = ({ icon, visibility }) => {
  return (
    <LogoStyles primary={visibility}>
      <img src={icon === 1 ? logo_museum_1 : logo_museum_2} alt="art-museum-logo" />
    </LogoStyles>
  );
};

export default Logo;
