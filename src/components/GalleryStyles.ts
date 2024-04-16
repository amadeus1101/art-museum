import styled from 'styled-components';
import { theme } from '../constants/theme';
import { devices } from '../constants/devices';

const GalleryWrapper = styled.div`
  width: 100%;
  .pagination {
    width: 100%;
    max-width: 1280px;
    margin-top: 80px;
    display: flex;
    justify-content: flex-end;
    ul {
      display: flex;
      li {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'LexendRegular', sans-serif;
        font-size: 18px;
        color: ${theme.colors.black};
        border-radius: 4px;
        transition: 0.3s;
        &.active {
          font-family: 'LexendMedium', sans-serif;
          color: ${theme.colors.white};
          background: #f17900;
          &:hover {
            background: #f17900;
          }
        }
        &:hover {
          cursor: pointer;
          background: ${theme.colors.white};
          border: 1px solid ${theme.colors.black};
        }
      }
    }
    @media ${devices.tablet} {
      margin-top: 60px;
      ul li {
        width: 20px;
        height: 20px;
        font-size: 16px;
      }
    }
  }
`;

const Grid = styled.div`
  width: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  @media ${devices.tablet} {
    margin-top: 20px;
    column-gap: 8px;
  }
`;

export { GalleryWrapper, Grid };
