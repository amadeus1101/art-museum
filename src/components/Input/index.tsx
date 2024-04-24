import { FC } from 'react';
import { IFavourites } from '@constants/IFavourites';
import { preloadCards } from '../../utils/preloadCards';
import { useInput } from '../../utils/useInput';
import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
	ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import Card from '../../components/Card';
import Headline from '../../components/Headline';
import { Flex } from '../Catalog/styled';
import { CardItemWrapper } from '../../components/Card/styled';
import { InputStyles } from './styled';
import search_icon from '../../assets/img/icon-search.png';

interface IValues {
	query: string;
}

const QuerySchema = Yup.object().shape({
	query: Yup.string()
		.required('Required')
		.min(2, '2 or more')
		.max(30, 'less than 30')
		.matches(/^[0-9a-zA-Z]{3,20}[0-9a-zA-Z\s]{0,20}$/, 'Failed regex'),
});

const Input: FC<IFavourites> = ({ favourites, callback }) => {
	//console.log('------INPUT');
	const { inputValue, searchResult, isQueryValid, onTyping, loading, error } =
		useInput('');
	if (error)
		return (
			<Headline
				title="Something gone wrong..."
				subtitle="API or our server working with errors"
			/>
		);
	if (loading) {
		const placeholder = preloadCards(6);
		return (
			<InputStyles $isloading={loading}>
				<div className="loader">Loading... {inputValue}</div>
				<Flex>
					{placeholder.map((card) => (
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
	}
	return (
		<InputStyles $isloading={!loading}>
			<Formik
				initialValues={{
					query: '',
				}}
				onSubmit={(
					values: IValues,
					{ setSubmitting }: FormikHelpers<IValues>
				) => {
					console.log(values);
					// setTimeout(() => {
					// 	alert(JSON.stringify(values, null, 2));
					// 	setSubmitting(false);
					// }, 500);
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

export default Input;
