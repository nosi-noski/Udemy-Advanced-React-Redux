import React from 'react';
import CommentBox from './Comment/CommentBox';
import { CommentList } from './Comment/CommentList';

export const App = () => {
	return (
		<div>
			<CommentBox />
			<CommentList />
		</div>
	);
};
