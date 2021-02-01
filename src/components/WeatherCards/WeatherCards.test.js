import React from 'react';
import WeatherCards from './WeatherCards.js';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { combineReducers } from 'redux';
const mockStore = configureStore({ reducer: combineReducers({}) });

describe('Weather Cards Component', () => {
	let store;
	let component;
	beforeEach(() => {
		store = mockStore({
			callWeatherForecastReducer: {
				data: {
					list: [],
				},
			},
		});

		component = renderer.create(
			<Provider store={store}>
				<WeatherCards />
			</Provider>
		);
	});

	it('should render with given state from Redux store', () => {
		expect(component.toJSON()).toMatchSnapshot();
	});
});
