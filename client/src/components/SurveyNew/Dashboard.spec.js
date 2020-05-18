import React from 'react';
import { shallow } from 'enzyme';
import SurveyNew from './SurveyNew';

describe('SurveyNew', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<SurveyNew />
		);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});