import React from "react";
import { connect } from "react-redux";
import User from "./User";
import { fetchPostsAndUser } from "../actions";

class UsersList extends React.Component {
	componentDidMount() {
		this.props.fetchPostsAndUser();
	}
	renderPosts() {
		if (!this.props.posts) {
			return <div>loading..</div>;
		} else {
			return this.props.posts.map(item => (
				<div className="item" key={item.id}>
					<div className="image">
						<img src="/images/placeholder.png" alt={item.title} />
					</div>
					<div className="content">
						<div className="header">{item.title}</div>
						<div className="meta">
							<span>{item.body}</span>
						</div>
						<User id={item.userId} />
					</div>
				</div>
			));
		}
	}
	render() {
		return <div className="ui items">{this.renderPosts()}</div>;
	}
}

export default connect(
	state => ({
		posts: state.posts
	}),
	{ fetchPostsAndUser }
)(UsersList);
