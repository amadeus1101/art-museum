import styled from 'styled-components';
import { theme } from '../constants/theme';

const PaginationStyles = styled.ul`
  width: 190px;
  display: flex;
  justify-content: space-between;
  li {
    width: 30px;
    height: 30px;
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
    }
  }
`;

const Pagination = () => {
  return (
    <PaginationStyles>
      <li className="active">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>+</li>
    </PaginationStyles>
  );
};

export default Pagination;
