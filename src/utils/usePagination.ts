import { useState, useEffect } from 'react';

export function usePagination(limit: number) {
	const [activePage, setActivePage] = useState('1');
	const [pages, setPages] = useState(['1', '2', '3', '4', '>']);

	const onClickPage = (page: string) => {
		if (page === '>') {
			const last = Number(pages[pages.length - 2]);
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
				const first = Number(pages[1]);
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
				// if (page !== activePage) {
				// 	if (page === pages[pages.length - 2]) {
				// 		const last = Number(pages[pages.length - 2]);
				// 		if (Number(page) + 2 < limit) {
				// 			setPages([
				// 				'<',
				// 				page,
				// 				String(last + 1),
				// 				String(last + 2),
				// 				last + 3 === limit ? String(last + 3) : '>',
				// 			]);
				// 		} else if (pages[pages.length - 1] === '>') {
				// 			const tmp = [];
				// 			for (let i = last; i < limit + 1; i++) tmp.push(String(i));
				// 			setPages(['<', ...tmp]);
				// 		}
				// 	} else if (page === pages[1]) {
				// 		const first = Number(pages[1]);
				// 		if (Number(page) - 2 > 1) {
				// 			setPages([
				// 				first - 3 === 1 ? '1' : '<',
				// 				String(first - 2),
				// 				String(first - 1),
				// 				page,
				// 				'>',
				// 			]);
				// 		} else if (pages[0] === '<') {
				// 			const tmp = [];
				// 			for (let i = 0; i < first; i++) tmp.push(String(i + 1));
				// 			setPages([...tmp, '>']);
				// 		}
				// 	}
				// 	setActivePage(page);
				// }
			}
		}
	};
	return { activePage, pages, onClickPage };
}
