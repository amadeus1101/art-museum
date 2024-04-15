import styled from 'styled-components';
import { theme } from '../../constants/theme';
import { devices } from '../../constants/devices';

const CardItemWrapper = styled.div`
  width: 416px;
  padding: 16px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.white};
  border: 1px solid #f0f1f1;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  .icon {
    width: 80px;
    height: 80px;
    margin-right: 16px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card__description {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .content {
      display: flex;
      flex-direction: column;
      max-width: 210px;
      p {
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      b {
        margin-top: 8px;
        font-family: 'InterBold';
        font-size: 15px;
        color: ${theme.colors.black};
        line-height: 26px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  @media ${devices.laptop} {
    max-width: 350px;
    padding: 12px 16px;
    .icon {
      width: 60px;
      height: 60px;
    }
    .card__description {
      .content {
        max-width: 160px;
        margin-right: 8px;
        p {
          font-size: 15px;
          line-height: 20px;
        }
        span,
        b {
          line-height: 20px;
          font-size: 13px;
        }
      }
    }
  }
  @media ${devices.tablet} {
    padding: 8px 24px;
    max-width: 100%;
    width: 100%;
    .icon {
      margin-right: 12px;
    }
    .card__description {
      .content {
        max-width: 240px;
        span,
        b {
          font-size: 10px;
          line-height: 15px;
        }
      }
    }
  }
  @media ${devices.mobileL} {
    .card__description {
      .content {
        max-width: 195px;
      }
    }
  }
`;

const GalleryItemWrapper = styled.div`
  max-width: 387px;
  max-height: 514px;
  display: flex;
  position: relative;
  .icon {
    width: 100%;
    aspect-ratio: 387/444;
    transition: transform 0.3s;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
  .card__description {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    max-width: 334px;
    width: 100%;
    padding: 17px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.white};
    .content {
      max-width: 75%;
      display: flex;
      flex-direction: column;
      p {
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      b {
        margin-top: 8px;
        font-family: 'InterBold';
        font-size: 15px;
        color: ${theme.colors.black};
        line-height: 26px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  @media ${devices.laptop} {
    .card__description {
      max-width: 100%;
      .content {
        p {
          font-size: 15px;
        }
        span,
        b {
          font-size: 13px;
        }
      }
    }
  }
  @media ${devices.tablet} {
    .card__description {
      padding: 8px 12px;
      .content {
        p {
          font-size: 13px;
          line-height: 20px;
        }
        span,
        b {
          font-size: 11px;
          line-height: 20px;
        }
        b {
          margin-top: 4px;
        }
      }
    }
  }
`;

export { CardItemWrapper, GalleryItemWrapper };
