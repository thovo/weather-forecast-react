import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from './WeatherCard.js';

it('Render normally', () => {
	const div = document.createElement('div');
	ReactDOM.render(<WeatherCard></WeatherCard>, div);
});
