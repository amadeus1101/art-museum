import { useContext } from 'react';
import { FavouritesType } from '@constants/FavouritesType';
import { favouritesContext } from '../store/favouritesContext';

import Card from '../components/Card';
import Headline from '../components/Headline';
import BannerText from '../components/BannerText';
import { Wrapper } from '../components/WrapperStyles';
import { Flex } from '../components/Catalog/styled';
import { CardItemWrapper } from '../components/Card/styled';
import bookmark_big from '../assets/img/icon-bookmark-big.png';

const Favourites = () => {
	const { favourites, onChangeFavourites } = useContext(
		favouritesContext
	) as FavouritesType;
	return (
		<Wrapper>
			<BannerText>
				Here Are Your{' '}
				<span>
					<img src={bookmark_big} alt="big-bookmark-icon" />
					Favourites
				</span>
			</BannerText>
			<Headline subtitle="Saved for you" title="Your favourites list" />
			<Flex>
				{favourites &&
					favourites.map((card) => (
						<CardItemWrapper key={card.id}>
							<Card {...card} state={true} callback={onChangeFavourites} />
						</CardItemWrapper>
					))}
			</Flex>
		</Wrapper>
	);
};

export default Favourites;
