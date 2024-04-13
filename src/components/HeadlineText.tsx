import styled from 'styled-components';
import { theme } from '../constants/theme';
import { FC } from 'react';

const HeadlineStyles = styled.div`
  margin: 40px auto;
  text-align: center;
  p {
    font-family: 'LexendRegular', sans-serif;
    font-size: 16px;
    color: ${theme.colors.orange};
  }
  h4 {
    font-family: 'LexendRegular', sans-serif;
    font-size: 32px;
    color: ${theme.colors.black};
  }
`;

interface IHeadlineText {
  title: string;
  subtitle: string;
}

const HeadlineText: FC<IHeadlineText> = ({ title, subtitle }) => {
  return (
    <HeadlineStyles>
      <p>{subtitle}</p>
      <h4>{title}</h4>
    </HeadlineStyles>
  );
};

export default HeadlineText;
