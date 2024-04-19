import { FC, useState } from 'react';
import { SortContainer } from './styled';

type TCardsChange = {
  sort: (cond: number) => void;
};
const sortArray = ['Id', 'Title', 'Artist'];

const Sort: FC<TCardsChange> = ({ sort }) => {
  const [activeParam, setActiveParam] = useState('None');
  const [isSortOpened, setSortOpened] = useState(false);

  const onChangeSortParams = (param: number) => {
    setActiveParam(sortArray[param]);
    sort(param + 1);
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
        <span onClick={() => setSortOpened(true)}>{activeParam}</span>
      )}
    </SortContainer>
  );
};

export default Sort;
