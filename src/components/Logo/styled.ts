import styled, { css } from 'styled-components';
import { devices } from '../../constants/devices';

const LogoStyles = styled.div<{ primary: boolean }>`
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
  @media ${devices.tablet} {
    ${(props) =>
      props.primary &&
      css`
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      `}
  }
`;

export default LogoStyles;
