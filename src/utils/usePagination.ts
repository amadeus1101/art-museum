import { useState, useEffect } from 'react';

export function usePagination(limit: number) {
  const [activePage, setActivePage] = useState('1');
  const [pages, setPages] = useState(['1', '2', '3', '4', '+']);

  const onClickPage = (page: string) => {
    if (page === '+') {
      const last = Number(pages[pages.length - 2]);
      if (last + 3 < limit) {
        setPages(['-', String(last + 1), String(last + 2), String(last + 3), '+']);
        setActivePage(Number(activePage) === 1 ? '5' : String(Number(activePage) + 3));
      } else {
        const end = limit - last + 1;
        const tmp = [];
        for (let i = 0; i < end; i++) tmp.push(String(last + i + 1));
        setPages(['-', ...tmp]);
      }
    } else {
      if (page === '-') {
        const first = Number(pages[1]);
        if (first - 3 > 1) {
          setPages([
            first - 3 === 2 ? '1' : '-',
            String(first - 3),
            String(first - 2),
            String(first - 1),
            '+'
          ]);
          setActivePage(String(Number(activePage) - 3));
        } else {
          const start = Number(pages[pages.length - 2]) - 3;
          const tmp = [];
          for (let i = 0; i < start; i++) tmp.push(String(i + 1));
          setPages([...tmp, '+']);
          setActivePage(Number(activePage) - 3 > 0 ? String(Number(activePage) - 3) : '1');
        }
      } else {
        setActivePage(page);
      }
    }
  };
  return { activePage, pages, onClickPage };
}
