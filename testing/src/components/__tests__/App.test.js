import React from 'react';
import { shallow } from 'enzyme';
import { App } from 'components/App';
import CommentBox from 'components/Comment/CommentBox';
import { CommentList } from 'components/Comment/CommentList';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />);
})


it('it shows comment box', () => {
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('it shows comment list', () => {
	expect(wrapped.find(CommentList).length).toEqual(1)
})