import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('Landing', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Landing
				auth={null}
				history={[]}
			/>
		);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});