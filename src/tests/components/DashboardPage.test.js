import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('should correctly render DashboardPage', () => {
	const wrapper = shallow(<DashboardPage />);
	expect(wrapper).toMatchSnapshot();
});
