import { FC } from 'react';
import { PaginationWrapper } from './styled';

interface IPagination {
  activePage: string;
  pages: string[];
  onClickPage: (obj: string) => void | null;
}

const Pagination: FC<IPagination> = ({ activePage, pages, onClickPage }) => {
  return (
    <PaginationWrapper>
      <ul>
        {pages.map((page) => (
          <li
            className={activePage === page ? 'active' : ''}
            onClick={() => onClickPage(page)}
            key={page}>
            {page}
          </li>
        ))}
      </ul>
    </PaginationWrapper>
  );
};

export default Pagination;
