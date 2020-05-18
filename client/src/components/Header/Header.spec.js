import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Payments from './Payments';

describe('Header', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Header
				auth={{ credits: 1 }}
			/>
		);
		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should render Google Login', () => {
		const wrapper = shallow(
			<Header
				auth={false}
			/>
		);
		expect(wrapper.contains(<a href="/auth/google">Login With Google</a>)).toBeTruthy();
	});

	it('should render AddCredits button', () => {
		const wrapper = shallow(
			<Header
				auth={{ credits: 1 }}
			/>
		);
		expect(wrapper.find(Payments).length).toEqual(1);
	});
});