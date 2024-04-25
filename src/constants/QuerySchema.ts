import * as Yup from 'yup';

export const QuerySchema = Yup.object().shape({
	query: Yup.string()
		.required('Required')
		.min(3, 'Query should be 2 or more symbols')
		.max(30, 'Query should be less than 30 symbols')
		.matches(
			/^[0-9a-zA-Z]{3,20}[0-9a-zA-Z\s]{0,20}$/,
			'You can use only a-z,0-9 symbols and backspaces'
		),
});
