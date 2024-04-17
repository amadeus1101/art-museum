import { theme } from '../constants/theme';
import { devices } from '../constants/devices';

import styled from 'styled-components';

const BannerText = styled.h2`
  max-width: 684px;
  margin: 120px auto 72px;
  text-align: center;
  font-family: 'LexendBold', sans-serif;
  font-size: 64px;
  color: ${theme.colors.black};
  span {
    color: #f17900;
    white-space: nowrap;
    img {
      width: 74px;
      height: 74px;
    }
  }
  @media ${devices.tablet} {
    max-width: 513px;
    font-size: 48px;
    span img {
      width: 48px;
      height: 48px;
    }
  }
`;

export default BannerText;
