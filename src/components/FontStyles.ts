import { createGlobalStyle } from 'styled-components';
import InterRegular from '../assets/fonts/Inter-Regular.ttf';
import LexendRegular from '../assets/fonts/LexendDeca-Regular.ttf';
import LexendMedium from '../assets/fonts/LexendDeca-Medium.ttf';
import LexendBold from '../assets/fonts/LexendDeca-Bold.ttf';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'InterRegular';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url(${InterRegular});
}
@font-face {
  font-family: 'LexendRegular';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url(${LexendRegular});
}
@font-face {
  font-family: 'LexendMedium';
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: url(${LexendMedium});
}
@font-face {
  font-family: 'LexendBold';
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url(${LexendBold});
}
`;

export default FontStyles;
