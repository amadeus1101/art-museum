import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { devices } from '../../constants/devices';

export const HeadlineStyles = styled.div`
  margin: 120px auto 40px;
  text-align: center;
  p {
    font-family: 'LexendRegular', sans-serif;
    font-size: 16px;
    color: ${colors.orange_light};
  }
  h4 {
    font-family: 'LexendRegular', sans-serif;
    font-size: 32px;
    color: ${colors.black};
  }
  @media ${devices.laptop} {
    margin: 60px auto 20px;
  }
  @media ${devices.tablet} {
    margin: 30px auto;
    p {
      font-size: 14px;
    }
    h4 {
      font-size: 24px;
    }
  }
`;
