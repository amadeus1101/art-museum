import Logo from '../Logo';
import FooterStyles from './styled';
import company_logo from '../../assets/img/logo-modsen.png';

function Footer() {
  return (
    <FooterStyles>
      <div className="footer__container">
        <Logo icon={2} visibility={false} />
        <div className="company">
          <img src={company_logo} alt="modsen-company-logo" />
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
