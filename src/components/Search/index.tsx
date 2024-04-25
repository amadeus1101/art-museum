import { FC, useState } from 'react';
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from 'formik';
import { FavouritesType } from '@constants/FavouritesType';
import { CardType } from '@constants/CardType';
import { QueryType } from '@constants/QueryType';
import { QuerySchema } from '../../constants/QuerySchema';
import { fetchData } from '../../utils/fetchData';

import Card from '../Card';
import Headline from '../Headline';
import { Flex } from '../Catalog/styled';
import { CardItemWrapper } from '../Card/styled';
import { InputStyles } from './styled';
import search_icon from '../../assets/img/icon-search.png';

const Search: FC<FavouritesType> = ({ favourites, callback }) => {
	const [searchResult, setSearchResult] = useState<CardType[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	if (error)
		return (
			<Headline
				title="Something gone wrong..."
				subtitle="API or our server working with errors"
			/>
		);

	return (
		<InputStyles $isloading={loading}>
			<Formik
				initialValues={{
					query: '',
				}}
				onSubmit={(
					values: QueryType,
					{ setSubmitting }: FormikHelpers<QueryType>
				) => {
					setTimeout(() => {
						setLoading(true);
						fetchData(`/search?q=${values.query.toLocaleLowerCase()}&limit=9`)
							.then((queryResponse) =>
								fetchData(
									`?ids=${queryResponse.data.map((obj: any) => obj.id).join(',')}&fields=id,title,artist_title,is_public_domain,image_id&limit=9`
								)
							)
							.then((resultResponse) => {
								setSearchResult(resultResponse.data);
								setLoading(false);
							})
							.catch((err) => {
								console.log('ERR2: ', err);
								setError('Search error occured... Awkward!!!');
								setLoading(false);
							});
					}, 500);
				}}
				validationSchema={QuerySchema}
			>
				<Form>
					<ErrorMessage name="query" component="label" />
					<Field name="query" placeholder="Search Art, Artist, Work..." />
					<button type="submit">
						<img src={search_icon} alt="search-icon-form" />
					</button>
				</Form>
			</Formik>
			<Flex>
				{searchResult.map((card) => (
					<CardItemWrapper key={card.id}>
						<Card
							{...card}
							state={
								favourites?.find((elem) => elem.id === card.id) ? true : false
							}
							callback={callback}
						/>
					</CardItemWrapper>
				))}
			</Flex>
		</InputStyles>
	);
};

export default Search;
