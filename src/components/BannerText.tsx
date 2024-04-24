import { colors } from '../constants/colors';
import { devices } from '../constants/devices';

import styled from 'styled-components';

const BannerText = styled.h2`
  max-width: 684px;
  margin: 0 auto 72px;
  text-align: center;
  font-family: 'LexendBold', sans-serif;
  font-size: 64px;
  color: ${colors.black};
  span {
    color: ${colors.orange_dark};
    white-space: nowrap;
    img {
      transform: translateY(12px);
      width: 74px;
      height: 74px;
    }
  }
  @media ${devices.laptop} {
    max-width: 50%;
    margin: 0 auto 36px;
    font-size: 48px;
    span img {
      transform: translateY(6px);
      width: 48px;
      height: 48px;
    }
  }
  @media ${devices.tablet} {
    max-width: 513px;
    font-size: 36px;
    span img {
      width: 36px;
      height: 36px;
    }
  }
`;

export default BannerText;
