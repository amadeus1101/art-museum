import { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../constants/theme';

const BannerTextStyles = styled.h1`
  margin: 120px 0;
  text-align: center;
  font-family: 'LexendBold', sans-serif;
  font-size: 64px;
  color: ${theme.colors.black};
`;

const BannerText: FC<{ content: string }> = ({ content }) => {
  return <BannerTextStyles>{content}</BannerTextStyles>;
};

export default BannerText;
