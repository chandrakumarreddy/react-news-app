export default (state = [], action) => {
	switch (action.type) {
		case "AUTHOR":
			return [...state, action.payload];
		default:
			return state;
	}
};
