import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../../actions';

class CommentBox extends Component {
	state = {
		comment: 'default'
	};

	componentDidMount() {
		this.shouldNavigateAway();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		this.shouldNavigateAway();
	}

	shouldNavigateAway() {
		if( !this.props.auth){
			this.props.history.push('/');
		}
	}

	handleChange = (event) => {
		this.setState({ comment: event.target.value })
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.saveComment(this.state.comment);

		this.setState({ comment: '' })
	};
	render () {
		return (
			<div>
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea
					cols="30"
					rows="10"
					value={this.state.comment}
					onChange={this.handleChange}
				/>
				<div>
					<button>Submit Comment</button>
				</div>
			</form>
				<button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox)