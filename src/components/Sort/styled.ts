import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const SortContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-family: 'InterRegular', sans-serif;
  font-size: 16px;
  color: ${theme.colors.black};
  p {
    padding: 12px 0;
  }
  ul {
    position: absolute;
    z-index: 50;
    top: 0;
    left: 75px;
    background: #fff;
    border: 2px solid ${theme.colors.black};
    border-radius: 10px;
    li {
      padding: 10px 30px;
      border-radius: 10px;
      &:hover {
        cursor: pointer;
        background: #d9d9d9;
      }
    }
  }
  span {
    margin-left: 15px;
    padding: 10px 30px;
    background: #fff;
    border: 2px solid ${theme.colors.black};
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background: #d9d9d9;
    }
  }
`;
