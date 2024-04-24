import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { devices } from '../../constants/devices';

const CardItemWrapper = styled.div`
  width: 416px;
  padding: 16px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.white};
  border: 1px solid #f0f1f1;
  transition: 0.3s;
  .icon {
    width: 80px;
    aspect-ratio: 1 / 1;
    margin-right: 16px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.3);
      }
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
        color: ${colors.black};
        line-height: 26px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span {
        font-family: 'InterRegular';
        font-size: 15px;
        color: ${colors.orange_light};
        line-height: 26px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      b {
        margin-top: 8px;
        font-family: 'InterBold';
        font-size: 15px;
        color: ${colors.black};
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
    padding: 10px;
    .card__description {
      .content {
        max-width: 175px;
      }
    }
  }
`;

const GalleryItemWrapper = styled.div`
  max-width: 387px;
  display: flex;
  position: relative;
  .icon {
    width: 100%;
    aspect-ratio: 387/444;
    position: relative;
    transition: transform 0.3s;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
    &:hover {
      transform: scale(1.02);
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
    background: ${colors.white};
    .content {
      max-width: 75%;
      display: flex;
      flex-direction: column;
      p {
        font-family: 'InterMedium';
        font-size: 17px;
        color: ${colors.black};
        line-height: 26px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span {
        font-family: 'InterRegular';
        font-size: 15px;
        color: ${colors.orange_light};
        line-height: 26px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      b {
        margin-top: 8px;
        font-family: 'InterBold';
        font-size: 15px;
        color: ${colors.black};
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
