import styled, { css } from 'styled-components';
import { devices } from '../../constants/devices';
import { theme } from '../../constants/theme';

const HeaderStyles = styled.header<{ $active?: boolean }>`
  width: 100%;
  padding: 32px 42px;
  background: linear-gradient(90deg, #343333, #484848, #282828);
  nav {
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .burger {
      display: none;
    }
    .navbar {
      display: flex;
      a {
        display: flex;
        align-items: center;
        margin-left: 16px;
        img {
          width: 24px;
          height: 24px;
          margin-right: 3px;
        }
        span {
          font-size: 16px;
          color: #fff;
          font-family: 'InterRegular';
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media ${devices.laptop} {
    nav {
      .navbar a span {
        font-size: 14px;
      }
    }
  }
  @media ${devices.tablet} {
    padding: 12px 22px;
    position: sticky;
    z-index: 100;
    left: 0;
    top: 0;
    nav {
      position: relative;
      flex-direction: column;
      align-items: center;
      .logo__inner {
        display: none;
      }
      .burger {
        display: block;
        position: relative;
        width: 32px;
        height: 32px;
        &::before,
        &::after {
          display: block;
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: ${theme.colors.white};
          transition: 0.3s;
        }
        &::before {
          top: 25%;
        }
        &::after {
          bottom: 25%;
        }
      }
      .navbar {
        display: none;
      }
    }
    ${(props) =>
      props.$active &&
      css`
        width: 100%;
        height: 100px;
        height: 100dvh;
        nav {
          height: 100%;
          .navbar {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            a {
              margin: 40px;
              img {
                width: 48px;
                height: 48px;
                margin-right: 10px;
              }
              span {
                font-size: 24px;
              }
            }
          }
          .logo__inner {
            display: block;
            position: absolute;
            bottom: 0;
          }
          .burger {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
            &::before {
              top: calc(50% + 1px);
              transform: rotate(45deg);
            }
            &::after {
              bottom: calc(50% - 3px);
              transform: rotate(-45deg);
            }
          }
        }
      `}
  }
`;

export default HeaderStyles;
