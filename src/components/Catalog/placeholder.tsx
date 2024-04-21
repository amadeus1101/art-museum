import { preloadCards } from '../../utils/preloadCards';

import { Flex } from './styled';
import { CardItemWrapper } from '../Card/styled';
import Card from '../Card';
import Headline from '../Headline';

const CatalogPlaceholder = () => {
  const placeholder = preloadCards(6);
  return (
    <>
      <Headline title="Loading..." subtitle="Please wait" />
      <Flex style={{ opacity: 0.5 }}>
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
