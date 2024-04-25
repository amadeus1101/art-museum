import { FC, useState } from 'react';
import { SortContainer } from './styled';

const sortArray = ['Default', 'Title', 'Artist'];
type sortType = {
	param: number;
	changeParam: React.Dispatch<React.SetStateAction<number>>;
};

const Sort: FC<sortType> = ({ param, changeParam }) => {
	const [isSortOpened, setSortOpened] = useState(false);

	const onChangeSortParams = (param: number) => {
		changeParam(param);
		setSortOpened(false);
	};
	return (
		<SortContainer>
			<p>Sort by:</p>
			{isSortOpened ? (
				<ul>
					{sortArray.map((elem, index) => (
						<li onClick={() => onChangeSortParams(index)} key={elem}>
							{elem}
						</li>
					))}
				</ul>
			) : (
				<span onClick={() => setSortOpened(true)}>{sortArray[param]}</span>
			)}
		</SortContainer>
	);
};

export default Sort;
