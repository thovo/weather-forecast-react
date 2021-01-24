import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import { connect } from 'react-redux';
const WeatherCards = ({ data }) => {
	return (
		<div className='cards row w-100 no-gutters my-4'>
			{data.list && data.list.length > 0 ? (
				data.list.map((day) => {
					return <WeatherCard date={day.dt * 1000} min={day.temp.min} max={day.temp.max} key={day.dt} />;
				})
			) : (
				<span>No data</span>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	const data = state.callWeatherForecastReducer;
	return { data };
};
export default connect(mapStateToProps)(WeatherCards);
