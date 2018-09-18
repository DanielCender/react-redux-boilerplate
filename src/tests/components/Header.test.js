import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout, wrapper;

beforeEach(() => {
	startLogout = jest.fn();
	wrapper = shallow(<Header startLogout={startLogout} />);
});

test('should render Header correctly', () => {
	const wrapper = shallow(<Header startLogout={startLogout} />);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
	wrapper.find('button').simulate('click', {});
	expect(startLogout).toHaveBeenCalled();
});
