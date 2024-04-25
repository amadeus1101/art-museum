import { useState, useEffect } from 'react';

export function usePagination(limit: number) {
	const [activePage, setActivePage] = useState('1');
	const [pages, setPages] = useState(['1', '2', '3', '4', '>']);

	const onClickPage = (page: string) => {
		const first = Number(pages[1]);
		const last = Number(pages[pages.length - 2]);
		if (page === '>') {
			if (activePage !== '1')
				setPages([
					'<',
					String(last - 1),
					String(last),
					String(last + 1),
					last + 2 === limit ? String(limit) : '>',
				]);
			setActivePage((prev) => String(Number(prev) + 1));
		} else {
			if (page === '<') {
				if (activePage !== String(limit))
					setPages([
						first - 1 === 2 ? '1' : '<',
						String(first - 1),
						String(first),
						String(first + 1),
						'>',
					]);
				setActivePage((prev) => String(Number(prev) - 1));
			} else {
				setActivePage(page);
			}
		}
	};
	return { activePage, pages, onClickPage };
}
