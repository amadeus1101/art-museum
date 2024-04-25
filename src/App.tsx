import { Routes, Route } from 'react-router-dom';
import { useFavourites } from './hooks/useFavourites';
import { favouritesContext } from './store/favouritesContext';

import Artwork from './pages/Artwork';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import ErrorBoundary from './components/ErrorBoundary';
import Headline from './components/Headline';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyles } from './components/GlobalStyles';

function App() {
	const { favourites, onChangeFavourites } = useFavourites();
	return (
		<favouritesContext.Provider value={{ favourites, onChangeFavourites }}>
			<GlobalStyles />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
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
							<Artwork />
						</ErrorBoundary>
					}
				/>
				<Route path="/favourites" element={<Favourites />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</favouritesContext.Provider>
	);
}
export default App;
