export default (state = [], action) => {
	switch (action.type) {
		case "POSTS":
			return [...state, ...action.payload];
		default:
			return state;
	}
};
