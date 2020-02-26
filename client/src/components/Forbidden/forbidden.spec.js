import React from 'react'
import { shallow } from 'enzyme';
import Forbidden from './forbidden'

describe('Forbidden component', () => {
  it('should render correctly component', () => {
    const wrapper = shallow(<Forbidden />);

    expect(wrapper.find('h1').text()).toEqual('You do not have access to this page');
    expect(wrapper.find('Link')).toHaveLength(1);
    expect(wrapper.find('Link').text()).toEqual(' homepage');
  });
});