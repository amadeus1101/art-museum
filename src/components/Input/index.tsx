import InputStyles from './styled';
import { useInput } from '../../utils/useInput';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { CardType } from '@constants/CardType';
import { fetchCards } from '../../utils/fetchCards';
import { CardsWrapper, Flex } from '../../components/CatalogStyles';
import { CardItemWrapper } from '../../components/Card/styled';
import Card from '../../components/Card';
import { IFavourites } from '@constants/IFavourites';

const Input: FC<IFavourites> = ({ favourites, callback }) => {
  console.log('Input rendeRED');

  const [searchedCards, setSearchedCards] = useState<CardType[]>([]);
  const { value, onChange } = useInput('');
  useEffect(() => {
    console.log('effect!!!');
    const timer = setTimeout(() => {
      if (value.length > 2) {
        console.log(
          `https://api.artic.edu/api/v1/artworks/search?q=${value.toLocaleLowerCase()}&fields=id`
        );
        fetchCards(
          `https://api.artic.edu/api/v1/artworks/search?q=${value.toLocaleLowerCase()}&fields=id&limit=10`
        )
          .then((res) => {
            return fetchCards(
              `https://api.artic.edu/api/v1/artworks?ids=${res.data.map((obj: any) => obj.id).join(',')}&fields=id,title,artist_title,is_public_domain,image_id&page=${Math.random() * 100}&limit=6`
            );
          })
          .then((resp) => setSearchedCards(resp.data));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);
  return (
    <>
      <InputStyles>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Search Art, Artist, Work..."
        />
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
