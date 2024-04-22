import { FC } from 'react';
import { IFavourites } from '@constants/IFavourites';
import { preloadCards } from '../../utils/preloadCards';
import { useInput } from '../../utils/useInput';

import Card from '../../components/Card';
import Headline from '../../components/Headline';
import { Flex } from '../Catalog/styled';
import { CardItemWrapper } from '../../components/Card/styled';
import { InputStyles } from './styled';

const Input: FC<IFavourites> = ({ favourites, callback }) => {
  //console.log('------INPUT');
  const { inputValue, searchResult, isQueryValid, onTyping, loading, error } = useInput('');
  if (error)
    return (
      <Headline title="Something gone wrong..." subtitle="API or our server working with errors" />
    );
  if (loading) {
    const placeholder = preloadCards(6);
    return (
      <>
        <InputStyles>
          <div className="loader">Loading... {inputValue}</div>
        </InputStyles>
        <Flex>
          {placeholder.map((card) => (
            <CardItemWrapper key={card.id}>
              <Card
                {...card}
                state={favourites?.find((elem) => elem.id === card.id) ? true : false}
                callback={callback}
              />
            </CardItemWrapper>
          ))}
        </Flex>
      </>
    );
  }
  return (
    <>
      <InputStyles $primary={!isQueryValid}>
        {!isQueryValid && (
          <label>
            Does not match the conditions! Only letters and backspaces, more than 2 and less than 30
            characters!
          </label>
        )}
        <input
          value={inputValue}
          onChange={onTyping}
          type="text"
          placeholder="Search Art, Artist, Work..."
        />
      </InputStyles>
      <Flex>
        {searchResult.map((card) => (
          <CardItemWrapper key={card.id}>
            <Card
              {...card}
              state={favourites?.find((elem) => elem.id === card.id) ? true : false}
              callback={callback}
            />
          </CardItemWrapper>
        ))}
      </Flex>
    </>
  );
};

export default Input;
