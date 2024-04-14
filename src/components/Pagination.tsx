import styled from 'styled-components';
import { theme } from '../constants/theme';

const PaginationStyles = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 80px auto 120px;
  display: flex;
  justify-content: flex-end;
  ul {
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
        border: 1px solid ${theme.colors.black};
      }
    }
  }
`;

const Pagination = () => {
  return (
    <PaginationStyles>
      <ul>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>+</li>
      </ul>
    </PaginationStyles>
  );
};

export default Pagination;
