import { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../constants/theme';
import { devices } from '../constants/devices';

const BannerText = styled.h2`
  max-width: 684px;
  margin: 120px auto 72px;
  text-align: center;
  font-family: 'LexendBold', sans-serif;
  font-size: 64px;
  color: ${theme.colors.black};
  span {
    color: #f17900;
  }
  @media ${devices.tablet} {
    max-width: 513px;
    font-size: 48px;
  }
`;

export default BannerText;
