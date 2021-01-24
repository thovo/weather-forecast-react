import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { updateAddress } from '../../actions';
let autoComplete;
const googleScript = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_PLACES_API}&libraries=places`;

const SearchLocationInput = () => {
	const [query, setQuery] = useState('');
	const autoCompleteRef = useRef(null);
	const dispatch = useDispatch();

	const loadScript = (url, callback) => {
		if (!document.querySelector('script[src="' + googleScript + '"]')) {
			let script = document.createElement('script');
			script.type = 'text/javascript';

			if (script.readyState) {
				script.onreadystatechange = function () {
					if (script.readyState === 'loaded' || script.readyState === 'complete') {
						script.onreadystatechange = null;
						callback();
					}
				};
			} else {
				script.onload = () => callback();
			}

			script.src = url;
			document.getElementsByTagName('head')[0].appendChild(script);
		}
	};

	const handleScriptLoad = (updateQuery, autoCompleteRef) => {
		autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current, {
			types: ['(cities)'],
		});
		autoComplete.setFields(['formatted_address', 'geometry']);
		autoComplete.addListener('place_changed', () => handlePlaceSelect(updateQuery));
	};

	const handlePlaceSelect = async (updateQuery) => {
		const addressObject = autoComplete.getPlace();
		const address = addressObject.formatted_address;
		const geometry = {
			lat: addressObject.geometry.location.lat(),
			lng: addressObject.geometry.location.lng(),
		};
		const place = {
			address,
			geometry,
		};
		dispatch({ type: 'UPDATE_ADDRESS', payload: place });
		updateQuery(address);
	};

	useEffect(() => {
		loadScript(googleScript, () => handleScriptLoad(setQuery, autoCompleteRef));
	}, []);

	return (
		<div className='search-location-input input-group'>
			<input
				ref={autoCompleteRef}
				onChange={(event) => setQuery(event.target.value)}
				placeholder='Enter a City'
				value={query}
				className='form-control'
				type='text'
			/>
		</div>
	);
};

export default connect(null, updateAddress)(SearchLocationInput);
