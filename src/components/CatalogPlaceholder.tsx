import { preloadCards } from '../utils/preloadCards';

import { Flex } from './CatalogStyles';
import { CardItemWrapper } from './Card/styled';
import Card from './Card';
import Headline from './Headline';

const CatalogPlaceholder = () => {
  const placeholder = preloadCards(6);
  return (
    <>
      <Headline title="Loading..." subtitle="Please wait" />
      <Flex>
        {placeholder.map((card) => (
          <CardItemWrapper key={card.id}>
            <Card {...card} state={false} callback={() => null} />
          </CardItemWrapper>
        ))}
      </Flex>
    </>
  );
};

export default CatalogPlaceholder;
