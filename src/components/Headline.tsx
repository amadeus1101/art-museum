import styled from 'styled-components';
import { theme } from '../constants/theme';
import { devices } from '../constants/devices';
import { FC } from 'react';

const HeadlineStyles = styled.div`
  margin: 120px auto 40px;
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
  @media ${devices.tablet} {
    margin: 60px auto 20px;
    margin: 20px auto;
    p {
      font-size: 14px;
    }
    h4 {
      font-size: 24px;
    }
  }
`;

interface IHeadlineText {
  title: string;
  subtitle: string;
}

const Headline: FC<IHeadlineText> = ({ title, subtitle }) => {
  return (
    <HeadlineStyles>
      <p>{subtitle}</p>
      <h4>{title}</h4>
    </HeadlineStyles>
  );
};

export default Headline;
