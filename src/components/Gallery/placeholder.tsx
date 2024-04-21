import { preloadCards } from '../../utils/preloadCards';

import { GalleryWrapper, Grid } from './styled';
import { GalleryItemWrapper } from '../Card/styled';
import Headline from '../Headline';
import Card from '../Card';
import { PaginationPlaceholder } from '../Pagination/placeholder';
import { FC } from 'react';

type TGalPlaceholder = {
  fakepages: string[];
};

const GalleryPlaceholder: FC<TGalPlaceholder> = ({ fakepages }) => {
  const placeholder = preloadCards(3);
  return (
    <GalleryWrapper>
      <Headline title="Loading..." subtitle="Please wait" />
      <Grid style={{ opacity: 0.5 }}>
        {placeholder.map((card) => (
          <GalleryItemWrapper key={card.id}>
            <Card {...card} state={false} callback={() => null} />
          </GalleryItemWrapper>
        ))}
      </Grid>
      <PaginationPlaceholder _pages={fakepages} />
    </GalleryWrapper>
  );
};

export default GalleryPlaceholder;
