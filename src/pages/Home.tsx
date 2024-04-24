import { FC } from 'react';
import { IFavourites } from '../constants/IFavourites';

import Input from '../components/Input';
import BannerText from '../components/BannerText';
import ErrorBoundary from '../components/ErrorBoundary';
import Catalog from '../components/Catalog';
import Gallery from '../components/Gallery';
import { Wrapper } from '../components/WrapperStyles';

const Home: FC<IFavourites> = ({ favourites, callback }) => {
	//console.log('----HOME');
	return (
		<Wrapper>
			<BannerText>
				Let's Find Some <span>Art</span> Here!
			</BannerText>
			<Input favourites={favourites} callback={callback} />
			<ErrorBoundary fallback={<h1>Error</h1>}>
				<Gallery favourites={favourites} callback={callback} />
			</ErrorBoundary>
			<ErrorBoundary fallback={<h1>Error</h1>}>
				<Catalog favourites={favourites} callback={callback} />
			</ErrorBoundary>
		</Wrapper>
	);
};

export default Home;
