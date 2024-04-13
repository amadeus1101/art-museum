import styled from 'styled-components';
import { devices } from '../../constants/devices';
import { theme } from '../../constants/theme';

const HeaderStyles = styled.header`
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
    .logo img {
      width: 206px;
      height: 63px;
    }
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
      .logo img {
        width: calc(206px * 0.75);
        height: calc(63px * 0.75);
      }
      .navbar a span {
        font-size: 14px;
      }
    }
  }
  @media ${devices.tablet} {
    nav {
      position: relative;
      flex-direction: column;
      align-items: center;
      .logo {
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
      &.active {
        height: calc(100dvh - 64px);
        .logo {
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
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
    }
  }
`;

export default HeaderStyles;
