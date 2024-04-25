import { colors } from '../constants/colors';
import { devices } from '../constants/devices';
import styled from 'styled-components';

export const ArtworkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .illustration {
    width: 497px;
    aspect-ratio: 497/570;
    margin-right: 32px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
    }
    .bookmark__wrapper {
      z-index: 90;
      position: absolute;
      right: 16px;
      top: 16px;
      img {
        width: auto;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
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
      color: ${colors.black};
    }
    .legend {
      p {
        margin-top: 32px;
        font-family: 'LexendRegular', sans-serif;
        font-size: 24px;
        color: ${colors.orange_light};
      }
      b {
        margin-top: 16px;
        display: block;
        font-family: 'LexendBold', sans-serif;
        font-size: 16px;
        color: ${colors.black};
      }
    }
    .overview {
      margin-top: 32px;
      ul {
        margin-top: 32px;
        li {
          margin-top: 16px;
          p {
            margin-right: 10px;
            font-family: 'LexendRegular', sans-serif;
            font-size: 16px;
            color: ${colors.orange_light};
          }
          span {
            font-family: 'LexendRegular', sans-serif;
            font-size: 16px;
            color: ${colors.black};
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
