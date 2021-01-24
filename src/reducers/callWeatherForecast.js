const initialState = {};

const callWeatherForecastReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CALL_WEATHER_FORECAST':
			return (state = action.payload);
		default:
			return state;
	}
};

export default callWeatherForecastReducer;
