import React from 'react'
import { shallow } from 'enzyme';
import Contacts from './contacts'
import Contact from './contact'

describe('Contacts component', () => {
  it('should render correctly component', () => {
    const wrapper = shallow(<Contacts />);

    expect(wrapper.find('h2').text()).toEqual('Consultations and order by phone:');
    expect(wrapper.find('h3').text()).toEqual('Address:');
    expect(wrapper.find('span').text()).toEqual('Kyiv, Hetmana 1, office 115');
    expect(wrapper.find('Contact')).toHaveLength(7);
  });

  it('Contact component', () => {
    const wrapper = shallow(<Contact>text</Contact>);
    expect(wrapper.find('span').text()).toEqual('text');
  })
});