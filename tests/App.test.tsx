import * as React from 'react';
import renderer from 'react-test-renderer';
import Headline from '../src/components/Headline';
import Logo from '../src/components/Logo';
import BannerText from '../src/components/BannerText';
import { ArtworkWrapper } from '../src/components/ArtworkWrapper';
import Bookmark from '../src/components/Bookmark';
import Footer from '../src/components/Footer';
import { Wrapper } from '../src/components/WrapperStyles';
import Card from '../src/components/Card';
import Header from '../src/components/Header';
import Pagination from '../src/components/Pagination';
import Sort from '../src/components/Sort';
import ErrorBoundary from '../src/components/ErrorBoundary';
import { ImageComponent } from '../src/components/Card/ImageComponent';
import Catalog from '../src/components/Catalog';
import Gallery from '../src/components/Gallery';
import Search from '../src/components/Search';
import Favourites from '../src/pages/Favourites';
import Artwork from '../src/pages/Artwork';
import Home from '../src/pages/Home';

import { preloadCards } from '../src/utils/preloadCards';
import { sortCards } from '../src/utils/sortCards';
import { fetchData } from '../src/utils/fetchData';

describe('Headline', function () {
	it('should display headline with data', function () {
		const component = renderer.create(
			<Headline title="Title" subtitle="Subtitle" />
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should display headline without data', function () {
		const component = renderer.create(<Headline title="" subtitle="" />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Logo', function () {
	it('should display logo1', function () {
		const component = renderer.create(<Logo icon={1} />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should display logo2', function () {
		const component = renderer.create(<Logo icon={0} />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('BannerText', function () {
	it('Should display h1', function () {
		const component = renderer.create(<BannerText>hi</BannerText>);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('ArtworkWrapper', function () {
	it('Should display css-wrapper for artwork', function () {
		const component = renderer.create(<ArtworkWrapper>styles</ArtworkWrapper>);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Bookmark', function () {
	it('Should display bookmark icon inactive', function () {
		const component = renderer.create(
			<Bookmark state={false} onClickBookmark={() => {}} />
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Should display bookmark icon active', function () {
		const component = renderer.create(
			<Bookmark state={true} onClickBookmark={() => {}} />
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Footer', function () {
	it('Should display footer', function () {
		const component = renderer.create(<Footer />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Pagination', function () {
	it('Should display pagination layout', function () {
		const component = renderer.create(
			<Pagination
				activePage="1"
				pages={['1', '2', '3', '4', '>']}
				onClickPage={() => {}}
			/>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Sort', function () {
	it('Should display sort button', function () {
		const component = renderer.create(
			<Sort param={1} changeParam={() => {}} />
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Header', function () {
	it('Should display header', function () {
		const component = renderer.create(<Header />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Card', function () {
	it('Should display common card', function () {
		const component = renderer.create(<Card />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Wrapper', function () {
	it('Should display app style wrapper', function () {
		const component = renderer.create(<Wrapper>styles</Wrapper>);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('ErrorBoundary', function () {
	it('Should display error handler', function () {
		const component = renderer.create(<ErrorBoundary>errors</ErrorBoundary>);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('ImageComponent', function () {
	it('Should display image', function () {
		const component = renderer.create(
			<ImageComponent src="" placeholder="" alt="" />
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Search', function () {
	it('Should display search component', function () {
		const component = renderer.create(<Search />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Catalog', function () {
	it('Should display catalog widget', function () {
		const component = renderer.create(<Catalog />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('Gallery', function () {
	it('Should display gallery widget', function () {
		const component = renderer.create(<Gallery />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('HomePage', function () {
	it('Should display whole homepage', function () {
		const component = renderer.create(<Home />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('FavouritesPage', function () {
	it('Should display whole favouritespage', function () {
		const component = renderer.create(<Favourites />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('ArtworkPage', function () {
	it('Should display whole artworkpage', function () {
		const component = renderer.create(<Artwork />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('sortCards', function () {
	const tmp = [
		{
			id: 0,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},

		{
			id: 1,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
		{
			id: 2,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
		{
			id: 3,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
		{
			id: 4,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
	];
	const result = [
		{
			id: 0,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
		{
			id: 1,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
		{
			id: 2,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
		{
			id: 3,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
		{
			id: 4,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
	];
	it('Should no sort cards', function () {
		expect(sortCards(tmp, 0)).toEqual(result);
	});
	it('Should sort cards array by a default order', function () {
		expect(sortCards(tmp, 1)).toEqual(result);
	});
	it('Should sort cards array by a title', function () {
		expect(sortCards(tmp, 2)).toEqual(result);
	});
	it('Should sort cards array by a author', function () {
		expect(sortCards(tmp, 3)).toEqual(result);
	});
});

describe('sortCards', function () {
	const tmp = [
		{
			id: 0,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},

		{
			id: 1,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
		{
			id: 2,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
		{
			id: 3,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
		{
			id: 4,
			title: 'Loading...',
			artist_title: 'Please wait',
			is_public_domain: false,
			image_id: '',
		},
	];
	it('Should sort cards array in order to condition', function () {
		expect(preloadCards(5)).toEqual(tmp);
	});
});
