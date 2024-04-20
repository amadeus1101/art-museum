import { ChangeEvent, useEffect, useState } from 'react';
import { CardType } from '@constants/CardType';

export function useInput(initialValue: string) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [searchResult, setSearchResult] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const onTyping = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.length > 2) {
        setLoading(true);
        fetch(
          `https://api.artic.edu/api/v1/artworks/search?q=${inputValue.toLocaleLowerCase()}&limit=9`
        )
          .then((searchPromise) => searchPromise.json())
          .then((searchResp) => {
            return fetch(
              `https://api.artic.edu/api/v1/artworks?ids=${searchResp.data.map((obj: any) => obj.id).join(',')}&fields=id,title,artist_title,is_public_domain,image_id&limit=9`
            );
          })
          .then((resultPromise) => resultPromise.json())
          .then((resultResp) => {
            setSearchResult(resultResp.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log('ERR2: ', err);
            setError(err);
            setLoading(true);
          });
      } else if (inputValue.length === 0) {
        setSearchResult([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return { inputValue, onTyping, searchResult, loading, error };
}
