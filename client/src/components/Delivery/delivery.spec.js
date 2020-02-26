import React from 'react'
import { shallow } from 'enzyme';
import Delivery from './delivery'

describe('Delivery component', () => {
  it('should render correctly component', () => {
    const wrapper = shallow(<Delivery />);

    expect(wrapper.find('h2')).toHaveLength(3);
    expect(wrapper.find('p')).toHaveLength(2);
  });
});