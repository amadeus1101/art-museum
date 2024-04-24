import * as React from 'react';
import { act } from 'react-dom/test-utils';
import * as ReactDOM from 'react-dom';
import App from '../src/App';
import { render, screen } from '@testing-library/react';

describe('App', function () {
	it('should display pass in number', function () {
		render(<App />);
		screen.debug();
	});
});
