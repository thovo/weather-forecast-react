import { combineReducers } from 'redux';
import callWeatherForecastReducer from './callWeatherForecast';
import updateAddressReducer from './updateAddress';

const allReducers = combineReducers({
	callWeatherForecastReducer,
	updateAddressReducer,
});

export default allReducers;
