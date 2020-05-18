import React from 'react';
import { shallow } from 'enzyme';
import SurveyFormReview from './SurveyFormReview';

describe('SurveyFormReview', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<SurveyFormReview
				onCancel={jest.fn()}
				submitSurvey={jest.fn()}
				formValues={{}}
				history={[]}
			/>
		);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});