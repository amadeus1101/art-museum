import { FC } from 'react';

import { BookmarkStyles } from './styled';
import bookmark_icon from '../../assets/img/icon-bookmark-2.png';
import bookmark_active from '../../assets/img/bookmark-checked.png';

const Bookmark: FC<{ state: boolean; onClickBookmark: () => void }> = ({
  state,
  onClickBookmark
}) => {
  return (
    <BookmarkStyles $active={state} onClick={() => onClickBookmark()}>
      <img src={!state ? bookmark_icon : bookmark_active} alt="bookmark-icon" />
    </BookmarkStyles>
  );
};

export default Bookmark;
