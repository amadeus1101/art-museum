import styled from 'styled-components';
import { theme } from '../constants/theme';
import bookmark_icon from '../assets/img/icon-bookmark-2.png';

const BookmarkStyles = styled.div`
  width: 59px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background: rgba(251, 215, 178, 30%);
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

const Bookmark = () => {
  return (
    <BookmarkStyles>
      <img src={bookmark_icon} alt="bookmark-icon" />
    </BookmarkStyles>
  );
};

export default Bookmark;
