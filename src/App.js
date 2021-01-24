import React from 'react';
import './App.css';
import WeatherCards from './components/WeatherCards/WeatherCards';
import SearchLocationInput from './components/SeachLocationInput/SearchLocationInput';
import axios from 'axios';
import { connect } from 'react-redux';
import { callWeatherForecast } from './actions';
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
class App extends React.Component {
	state = { address: '', data: null };

	callWeatherData = async (lat, lng) => {
		const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&units=metric&cnt=5&appid=${API_KEY}`;
		let response = await axios.get(url);
		let data = response.data;
		this.props.callWeatherForecast(data);
	};

	componentDidUpdate(prevProps) {
		if (this.props.geometry.lat !== prevProps.geometry.lat || this.props.geometry.lng !== prevProps.geometry.lng) {
			this.callWeatherData(this.props.geometry.lat, this.props.geometry.lng);
		}
	}

	render() {
		return (
			<div className='app container-fluid'>
				<h1 className='my-2'>Weather Forecast</h1>
				<h2 className='my-2'>
					You can use the search box to find the weather forecast for 5 days for a specific city
				</h2>
				<div className='search my-2 w-100'>
					<SearchLocationInput />
				</div>
				{this.props.address ? (
					<span className='my-4'>Forecast for next 5 days of {this.props.address}</span>
				) : (
					<span className='my-4'>Search a place to display weather forecast!</span>
				)}

				<WeatherCards></WeatherCards>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { address, geometry } = state.updateAddressReducer;
	return {
		address,
		geometry,
	};
};

const mapDispatchToProps = { callWeatherForecast };
export default connect(mapStateToProps, mapDispatchToProps)(App);
