import { preloadCards } from '../utils/preloadCards';

import { GalleryWrapper, Grid } from './GalleryStyles';
import { GalleryItemWrapper } from './Card/styled';
import Headline from './Headline';
import Card from './Card';

const GalleryPlaceholder = () => {
  const placeholder = preloadCards(3);
  return (
    <GalleryWrapper>
      <Headline title="Loading..." subtitle="Please wait" />
      <Grid>
        {placeholder.map((card) => (
          <GalleryItemWrapper key={card.id}>
            <Card {...card} state={false} callback={() => null} />
          </GalleryItemWrapper>
        ))}
      </Grid>
    </GalleryWrapper>
  );
};

export default GalleryPlaceholder;
