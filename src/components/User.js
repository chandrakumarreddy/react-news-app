import React from "react";
import { connect } from "react-redux";

export class User extends React.Component {
	render() {
		const user = this.props.authors.find(item => item.id === this.props.id);
		if (!user) {
			return <div>Loading..</div>;
		}
		return <div className="extra">Author : {user.name}</div>;
	}
}

export default connect(state => ({ authors: state.author }))(User);
