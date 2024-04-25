import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CardType } from './constants/CardType';
import { GlobalStyles } from './components/GlobalStyles';
import { useFavourites } from './hooks/useFavourites';

import Header from './components/Header';
import Footer from './components/Footer';
import Artwork from './pages/Artwork';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import ErrorBoundary from './components/ErrorBoundary';
import Headline from './components/Headline';

function App() {
	//console.log('--APP');
	const { favourites, onChangeFavourites } = useFavourites();
	return (
		<>
			<GlobalStyles />
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Home favourites={favourites} callback={onChangeFavourites} />
					}
				/>
				<Route
					path="/artwork/:id"
					element={
						<ErrorBoundary
							fallback={
								<Headline
									title="Error, bad URL"
									subtitle="Something gone wrong. Cannot get fetch data for artwork"
								/>
							}
						>
							<Artwork favourites={favourites} callback={onChangeFavourites} />
						</ErrorBoundary>
					}
				/>
				<Route
					path="/favourites"
					element={
						<Favourites favourites={favourites} callback={onChangeFavourites} />
					}
				/>
				<Route
					path="*"
					element={
						<Home favourites={favourites} callback={onChangeFavourites} />
					}
				/>
			</Routes>
			<Footer />
		</>
	);
}
export default App;
