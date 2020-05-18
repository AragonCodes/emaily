import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Dashboard
				surveys={[
					{
						yes: 1,
						no: 0,
						_id: '5e3aff6d39558d00177e201a',
						title: 'A real campaign',
						subject: 'Customer Review',
						body: 'Did you like the service provided by Aragoncodes',
						dateSent: '2020-02-05T17:46:21.135Z',
						lastResponded: '2020-02-05T17:49:43.695Z'
					}
				]}
				fetchSurveys={jest.fn()}
			/>
		);
		expect(wrapper.debug()).toMatchSnapshot();
	});
});