import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../Comment/CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	)
})

afterEach(() => {
	wrapped.unmount();
});

it('it has a text in textarea and button', () => {
		expect(wrapped.find('textarea').length).toEqual(1);
		expect(wrapped.find('button').length).toEqual(1);
	}
);

describe('the textarea', () => {

	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'test comment'}
		})

		wrapped.update();
	})
	it('it has a textarea that users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('test comment')
	});

	it('textarea empty after submit form', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('test comment');

		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('')
	})
})