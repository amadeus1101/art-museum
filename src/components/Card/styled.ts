import styled from 'styled-components';
import { theme } from '../../constants/theme';

const CardStyles = styled.div`
  max-width: 387px;
  max-height: 514px;
  display: flex;
  position: relative;
  .illustration {
    width: 100%;
    aspect-ratio: 387/444;
    img {
      width: 100%;
      height: 100%;
      transition: 0.3s;
    }
  }
  &:hover {
    .illustration img {
      cursor: pointer;
      transform: scale(0.95);
    }
  }
`;

export default CardStyles;
