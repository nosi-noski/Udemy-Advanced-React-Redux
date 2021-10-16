import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import CommentBox from '../Comment/CommentBox';
import { CommentList } from '../Comment/CommentList';

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