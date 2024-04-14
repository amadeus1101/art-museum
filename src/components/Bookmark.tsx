import styled from 'styled-components';
import { theme } from '../constants/theme';
import { devices } from '../constants/devices';
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
    background: rgba(251, 215, 178, 100%);
  }
  img {
    width: 24px;
    height: 24px;
  }
  @media ${devices.laptop} {
    width: 48px;
    height: 48px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  @media ${devices.tablet} {
    width: 32px;
    height: 32px;
    img {
      width: 16px;
      height: 16px;
    }
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
