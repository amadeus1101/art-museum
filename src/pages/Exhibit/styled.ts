import { theme } from '../../constants/theme';
import { devices } from '../../constants/devices';
import styled from 'styled-components';

const ExhibitWidget = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .illustration {
    width: 497px;
    margin-right: 32px;
    position: relative;
    img {
      max-width: 100%;
      aspect-ratio: 497/570;
    }
    .bookmark__wrapper {
      position: absolute;
      right: 16px;
      top: 16px;
    }
  }
  .content {
    max-width: 640px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      font-family: 'LexendRegular', sans-serif;
      font-size: 32px;
      color: ${theme.colors.black};
    }
    .legend {
      p {
        margin-top: 32px;
        font-family: 'LexendRegular', sans-serif;
        font-size: 24px;
        color: ${theme.colors.orange};
      }
      b {
        margin-top: 16px;
        display: block;
        font-family: 'LexendBold', sans-serif;
        font-size: 16px;
        color: ${theme.colors.black};
      }
    }
    .overview {
      margin-top: 32px;
      ul {
        margin-top: 32px;
        li {
          margin-top: 16px;
          display: flex;
          p {
            margin-right: 10px;
            font-family: 'LexendRegular', sans-serif;
            font-size: 16px;
            color: ${theme.colors.orange};
          }
          span {
            font-family: 'LexendRegular', sans-serif;
            font-size: 16px;
            color: ${theme.colors.black};
          }
        }
      }
    }
  }
  @media ${devices.laptop} {
    .content {
      h4 {
        font-size: 24px;
      }
      .legend {
        p {
          margin-top: 24px;
          font-size: 18px;
        }
        b {
          margin-top: 12px;
          font-size: 14px;
        }
      }
      .overview {
        ul {
          margin-top: 24px;
          li {
            margin-top: 12px;
            p,
            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
    .illustration {
      max-width: 250px;
      margin: 0;
    }
    .content {
      .legend {
        margin-top: 32px;
        p {
          margin-top: 12px;
        }
        b {
          margin-top: 8px;
        }
      }
    }
  }
`;

export default ExhibitWidget;
