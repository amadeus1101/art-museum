import styled from 'styled-components';
import { devices } from '../../constants/devices';

const LogoStyles = styled.div`
  width: 206px;
  height: 63px;
  img {
    width: 100%;
    height: 100%;
  }
  @media ${devices.laptop} {
    width: calc(206px * 0.75);
    height: calc(63px * 0.75);
  }
`;

export default LogoStyles;
