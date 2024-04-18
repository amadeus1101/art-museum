import { FC, useEffect, useState } from 'react';
import { CardType } from '@constants/CardType';
import { IFavourites } from '@constants/IFavourites';
import { useInput } from '../../utils/useInput';
import { fetchCards } from '../../utils/fetchCards';

import { CardsWrapper, Flex } from '../../components/CatalogStyles';
import { CardItemWrapper } from '../../components/Card/styled';
import Card from '../../components/Card';
import InputStyles from './styled';
import Headline from '../../components/Headline';

const Input: FC<IFavourites> = ({ favourites, callback }) => {
  console.log('------INPUT');
  const sorts = ['Id', 'Title', 'Date'];
  const sortArr = ['id', 'is_boosted', 'api_model'];
  const [searchedCards, setSearchedCards] = useState<CardType[]>([]);
  const { value, onChange } = useInput('');
  const [sortParams, setSortParams] = useState(-1);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (value.length > 2) {
        fetchCards(
          `https://api.artic.edu/api/v1/artworks/search?q=${value.toLocaleLowerCase()}${sortParams !== -1 ? '&sort=' + sortArr[sortParams] : ''}&limit=6`
        )
          .then((res) => {
            return fetchCards(
              `https://api.artic.edu/api/v1/artworks?ids=${res.data.map((obj: any) => obj.id).join(',')}&fields=id,title,artist_title,is_public_domain,image_id&limit=6`
            );
          })
          .then((resp) => setSearchedCards(resp.data))
          .catch((err) => console.log('Input fetch error'));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [value, sortParams]);

  const onClickSort = (param: number) => {
    setSortParams(param);
  };
  return (
    <>
      <InputStyles>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Search Art, Artist, Work..."
        />

        <div className="sorting">
          <ul>
            {sorts.map((elem, index) => (
              <li onClick={() => onClickSort(index)}>{elem}</li>
            ))}
          </ul>
        </div>
      </InputStyles>
      <CardsWrapper>
        <Flex>
          {searchedCards &&
            searchedCards.map((card) => (
              <CardItemWrapper key={card.id}>
                <Card
                  {...card}
                  state={favourites?.find((elem) => elem.id === card.id) ? true : false}
                  callback={callback}
                />
              </CardItemWrapper>
            ))}
        </Flex>
      </CardsWrapper>
    </>
  );
};

export default Input;
