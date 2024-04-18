import { FC, Suspense } from 'react';
import { IFavourites } from '@constants/IFavourites';

import Input from '../../components/Input';
import BannerText from '../../components/BannerText';
import Wrapper from '../../components/WrapperStyles';
import ErrorBoundary from '../../components/ErrorBoundary';
import Gallery from '../../components/Gallery';
import Catalog from '../../components/Catalog';

const Home: FC<IFavourites> = ({ favourites, callback }) => {
  console.log('----HOME');
  return (
    <Wrapper>
      <BannerText>
        Let's Find Some <span>Art</span> Here!
      </BannerText>
      <Input favourites={favourites} callback={callback} />
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <Suspense fallback={<h1>Loading gallery...</h1>}>
          <Gallery favourites={favourites} callback={callback} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <Suspense fallback={<h1>Loading gallery...</h1>}>
          <Catalog favourites={favourites} callback={callback} />
        </Suspense>
      </ErrorBoundary>
    </Wrapper>
  );
};

export default Home;
