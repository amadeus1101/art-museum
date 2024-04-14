import styled, { css } from 'styled-components';
import { theme } from '../constants/theme';
import { devices } from '../constants/devices';
import { FC } from 'react';
import Bookmark from './Bookmark';

const CardDescStyles = styled.div<{ primary: boolean; width: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .content {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    p {
      max-width: 200px;
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
  @media ${devices.laptop} {
    .content {
      margin-right: 8px;
      p {
        max-width: 160px;
        font-size: 12px;
        line-height: 20px;
      }
      span {
        font-size: 11px;
      }
      b {
        font-size: 11px;
        margin: 0;
      }
    }
  }
  @media ${devices.laptop} {
    padding: 12px 16px;
  }
  @media ${devices.tablet} {
    padding: 12px 6px;
    width: 100%;
    .content {
      p {
        max-width: ${(props) => props.width + 'px'};
      }
      span,
      b {
        font-size: 10px;
        line-height: 15px;
      }
    }
  }
  @media ${devices.mobileL} {
    .content {
      p {
        max-width: ${(props) => props.width * 0.75 + 'px'};
        font-size: 11px;
      }
    }
  }
  ${(props) =>
    props.primary &&
    css`
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      max-width: 100%;
      padding: 17px 24px;
      justify-content: space-between;
      background: ${theme.colors.white};
      .content {
        margin: 0;
      }
    `}
`;
type description = {
  title: string;
  author: string;
  status: string;
  primary: boolean;
  title_wid: number;
};

const CardDescription: FC<description> = ({ title, author, status, primary, title_wid }) => {
  return (
    <CardDescStyles primary={primary} width={title_wid}>
      <div className="content">
        <p>{title}</p>
        <span>{author}</span>
        <b>{status}</b>
      </div>
      <Bookmark />
    </CardDescStyles>
  );
};

export default CardDescription;
