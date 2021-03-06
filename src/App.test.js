import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from './App';
import callWeatherForecastReducer from './reducers/callWeatherForecast';
const mockStore = configureStore([]);

describe('App', () => {
	let store;
	let component;
	beforeEach(() => {
		store = mockStore({
			updateAddressReducer: {
				address: '',
				geometry: {
					lat: 0,
					lng: 0,
				},
			},
			callWeatherForecastReducer: {
				data: {
					list: [],
				},
			},
		});

		component = renderer.create(
			<Provider store={store}>
				<App />
			</Provider>
		);
	});

	it('should render with given state from Redux store', () => {
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('should return the initial state', () => {
		const expected = {};
		expect(callWeatherForecastReducer(undefined, {})).toEqual(expected);
	});

	it('should handle call weather forecast data', () => {
		const data = {
			list: [],
		};
		const action = {
			type: 'CALL_WEATHER_FORECAST',
			payload: data,
		};

		const expected = {
			list: [],
		};
		expect(callWeatherForecastReducer({}, action)).toEqual(expected);
	});
});
