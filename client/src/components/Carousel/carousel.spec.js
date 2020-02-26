import React from 'react'
import { mount, shallow } from 'enzyme';
import Carousel from 'nuka-carousel';
import Carousels from './carousel'

describe('Carousels component', () => {
  it('Carousels should render with props', () => {
    const props = {
      slidesToShow: 2,
      autoPlay: true,
    }
    const wrapper = mount(<Carousels {...props} />);

    expect(wrapper.find(Carousel)).toHaveLength(1);
    expect(wrapper.prop('slidesToShow')).toEqual(2)
    expect(wrapper.prop('autoPlay')).toEqual(true)
  });

  it('Carousels should render with children', () => {
    const props = {
      slidesToShow: 2,
      children: '<div data-foo="foo">Some text</div>'
    }
    const wrapper = shallow(<Carousels {...props} />);

    expect(wrapper.contains('<div data-foo="foo">Some text</div>')).toEqual(true);
  });
});