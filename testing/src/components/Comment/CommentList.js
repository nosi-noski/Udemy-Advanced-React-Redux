import React from 'react';
import { connect } from "react-redux";

const CommentListComponent = (props) => {
	const { comments } = props;
	const renderComments = (comments) => {
		return comments?.map( comment => {
			return <li key={comment}>{comment}</li>
		} );
	}
	return (
		<div>
			<ul>
				{ renderComments(comments) }
			</ul>
		</div>
	);
};

function mapStateToProps(state){
	return {comments: state.comments};
}
export const CommentList = connect(mapStateToProps)(CommentListComponent);