import { combineReducers } from "redux";
import posts from "./PostsReducer";
import author from "./AuthorReducer";

export default combineReducers({
	posts,
	author
});
