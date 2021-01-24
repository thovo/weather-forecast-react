export const updateAddress = (place) => {
	return {
		type: 'UPDATE_ADDRESS',
		payload: place,
	};
};

export const callWeatherForecast = (data) => {
	return {
		type: 'CALL_WEATHER_FORECAST',
		payload: data,
	};
};
