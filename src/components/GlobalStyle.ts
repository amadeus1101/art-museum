import { createGlobalStyle } from 'styled-components';
import { theme } from '../constants/theme';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.white};
  }
`;

export default GlobalStyle;
