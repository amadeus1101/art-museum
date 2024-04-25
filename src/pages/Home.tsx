import Search from '../components/Search';
import BannerText from '../components/BannerText';
import ErrorBoundary from '../components/ErrorBoundary';
import Catalog from '../components/Catalog';
import Gallery from '../components/Gallery';
import { Wrapper } from '../components/WrapperStyles';

const Home = () => {
	return (
		<Wrapper>
			<BannerText>
				Let's Find Some <span>Art</span> Here!
			</BannerText>
			<Search />
			<ErrorBoundary fallback={<h1>Error</h1>}>
				<Gallery />
			</ErrorBoundary>
			<ErrorBoundary fallback={<h1>Error</h1>}>
				<Catalog />
			</ErrorBoundary>
		</Wrapper>
	);
};

export default Home;
