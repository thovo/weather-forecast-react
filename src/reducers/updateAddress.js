const initialState = {
	address: '',
	geometry: {
		lat: 0,
		lng: 0,
	},
};

const updateAddressReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_ADDRESS':
			return { ...state, address: action.payload.address, geometry: action.payload.geometry };
		default:
			return state;
	}
};

export default updateAddressReducer;
