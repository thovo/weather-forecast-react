import React from 'react';

const formatDate = (dateData) => {
	const date = new Date(dateData);
	return date.toLocaleString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	});
};
const WeatherCard = (props) => {
	return (
		<div className='col-12 col-sm'>
			<div className='card weather-card text-center'>
				<div className='card-header'>
					<span>{formatDate(props.date)}</span>
				</div>
				<div className='card-body'>
					<div className='d-flex flex-column'>
						<span className='temparature min'>Min: {Math.floor(props.min)} °C</span>
						<span className='temparature max'>Max: {Math.floor(props.max)} °C</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherCard;
