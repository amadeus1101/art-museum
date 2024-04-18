import styled from 'styled-components';
import { theme } from '../../constants/theme';
import { devices } from '../../constants/devices';

export const FooterStyles = styled.footer`
  width: 100%;
  padding: 32px 42px;
  display: flex;
  justify-content: center;
  background: ${theme.colors.white};
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
    @media ${devices.tablet} {
      .company {
        width: 82px;
        height: 30px;
      }
    }
  }
`;
