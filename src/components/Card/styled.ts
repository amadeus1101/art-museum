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
    }
  }
  .description {
    position: absolute;
    bottom: -52px;
    left: 50%;
    transform: translateX(-50%);
    width: 334px;
    padding: 17px 24px;
    display: flex;
    align-items: center;
    background: ${theme.colors.white};
    .content {
      display: flex;
      flex-direction: column;
      p {
        width: 219px;
        font-family: 'InterMedium';
        font-size: 17px;
        color: ${theme.colors.black};
        line-height: 26px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span {
        font-family: 'InterRegular';
        font-size: 15px;
        color: ${theme.colors.orange};
        line-height: 26px;
      }
      b {
        margin-top: 8px;
        font-family: 'InterBold';
        font-size: 15px;
        color: ${theme.colors.black};
        line-height: 26px;
      }
    }
    .bookmark {
      width: 59px;
      height: 59px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f9f9f9;
      border-radius: 50%;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export default CardStyles;
