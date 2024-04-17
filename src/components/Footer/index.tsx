import FooterStyles from './styled';

import Logo from '../Logo';
import company_logo from '../../assets/img/logo-modsen.png';

function Footer() {
  return (
    <FooterStyles>
      <div className="footer__container">
        <Logo icon={2} />
        <div className="company">
          <img src={company_logo} alt="modsen-company-logo" />
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
