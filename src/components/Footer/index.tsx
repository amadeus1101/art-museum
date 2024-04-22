import { Link } from 'react-router-dom';
import { FooterStyles } from './styled';

import Logo from '../Logo';
import company_logo from '../../assets/img/logo-modsen.png';

function Footer() {
  return (
    <FooterStyles>
      <div className="footer__container">
        <Link to="/">
          <Logo icon={2} />
        </Link>
        <Link to="https://www.modsen-software.com/" target="_blank">
          <div className="company">
            <img src={company_logo} alt="modsen-company-logo" />
          </div>
        </Link>
      </div>
    </FooterStyles>
  );
}

export default Footer;
