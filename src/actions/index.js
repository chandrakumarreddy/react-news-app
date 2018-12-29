import axios from "axios";
import _ from "lodash";

export const fetchPostsAndUser = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	// _.uniq(_.map(getState().posts, "userId")).forEach(id =>
	// 	dispatch(fetchPost(id))
	// );
	_.chain(getState().posts)
		.map("userId")
		.forEach(id => dispatch(fetchPost(id)))
		.value();
};

const fetchPosts = () => async dispatch => {
	const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
	dispatch({
		type: "POSTS",
		payload: res.data
	});
};

//with the help of memoization
// export const fetchPost = id => dispatch => _fetchPost(id, dispatch);

// const _fetchPost = _.memoize(async (id, dispatch) => {
// 	const res = await axios.get(
// 		`https://jsonplaceholder.typicode.com/users/${id}`
// 	);
// 	dispatch({
// 		type: "AUTHOR",
// 		payload: res.data
// 	});
// });

const fetchPost = id => async dispatch => {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	dispatch({
		type: "AUTHOR",
		payload: res.data
	});
};
