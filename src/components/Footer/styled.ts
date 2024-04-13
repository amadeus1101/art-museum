import styled from 'styled-components';
import { theme } from '../../constants/theme';

const FooterStyles = styled.footer`
  width: 100%;
  background: ${theme.colors.white};
  padding: 32px 42px;
  .footer__container {
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .company {
      width: 164px;
      height: 59px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default FooterStyles;
