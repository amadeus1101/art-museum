import { FC } from 'react';
import { PaginationWrapper } from './styled';

type TPagPlaceholder = {
  _pages: string[];
};

export const PaginationPlaceholder: FC<TPagPlaceholder> = ({ _pages }) => {
  return (
    <PaginationWrapper>
      <ul style={{ opacity: 0.5 }}>
        {_pages.map((page) => (
          <li key={page}>{page}</li>
        ))}
      </ul>
    </PaginationWrapper>
  );
};
