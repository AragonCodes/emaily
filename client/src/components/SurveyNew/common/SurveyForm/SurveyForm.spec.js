import React from 'react';
import { shallow } from 'enzyme';
import SurveyForm from './SurveyForm';

describe('SurveyForm', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<SurveyForm
				handleSubmit={jest.fn()}
				onSurveySubmit={jest.fn()}
			/>
		);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});