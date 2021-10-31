import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './Comment/CommentBox';
import { CommentList } from './Comment/CommentList';

class App extends Component {
	renderButton() {
		if(this.props.auth){
			return (
				<button>Sign Out</button>
			)
		}
		return (
			<button>Sign In</button>
		)
	}

	renderHeader() {
		return(
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/post">Post A Comment</Link>
				</li>
				<li>
					{this.renderButton()}
				</li>
			</ul>
		);
	}

	render() {
		return (
			<div>
				{this.renderHeader()}
				<Route path="/post" component={CommentBox} />
				<Route exact path="/" component={CommentList} />
			</div>
		)
	}
};

function mapStateToProps(state){
	return {auth: state.auth}
}

export default connect(mapStateToProps)(App);
