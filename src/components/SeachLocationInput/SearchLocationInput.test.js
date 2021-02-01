import React from 'react';
import SearchLocationInput from './SearchLocationInput.js';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import updateAddressReducer from '../../reducers/updateAddress';

const mockStore = configureStore([]);

describe('Search Location Input Component', () => {
	let store;
	let component;
	beforeEach(() => {
		store = mockStore({
			state: '',
		});

		component = renderer.create(
			<Provider store={store}>
				<SearchLocationInput />
			</Provider>
		);
	});

	it('should render with given state from Redux store', () => {
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('should return the initial state', () => {
		const expected = {
			address: '',
			geometry: {
				lat: 0,
				lng: 0,
			},
		};
		expect(updateAddressReducer(undefined, {})).toEqual(expected);
	});

	it('should handle update address', () => {
		const data = {
			address: '',
			geometry: {
				lat: 0,
				lng: 0,
			},
		};
		const action = {
			type: 'UPDATE_ADDRESS',
			payload: data,
		};

		const expected = {
			address: '',
			geometry: {
				lat: 0,
				lng: 0,
			},
		};
		expect(updateAddressReducer({}, action)).toEqual(expected);
	});
});
